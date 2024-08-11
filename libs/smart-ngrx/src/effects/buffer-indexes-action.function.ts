import { NgZone } from '@angular/core';
import { Action } from '@ngrx/store';
import {
  asapScheduler,
  buffer,
  debounceTime,
  groupBy,
  map,
  mergeMap,
  Observable,
  Subscriber,
} from 'rxjs';

import { forNext } from '../common/for-next.function';
import { IndexesProp } from '../types/indexes-props.interface';

function flatten(prop: IndexesProp[]): IndexesProp {
  const returnProps = {
    indexes: [],
    childField: '',
    parentId: '',
  } as IndexesProp;
  forNext(prop, (a) => {
    returnProps.childField = a.childField;
    returnProps.parentId = a.parentId;
    forNext(a.indexes, (b) => {
      returnProps.indexes.push(b);
    });
  });
  return returnProps;
}

function mainIndexesBuffer(
  source: Observable<Action & IndexesProp>,
  bufferTime: number,
  ngZone: NgZone,
  observer: Subscriber<IndexesProp>,
) {
  source
    .pipe(
      groupBy((action) => `${action.parentId}-${action.childField}`),
      mergeMap((grouped) =>
        grouped.pipe(
          buffer(grouped.pipe(debounceTime(bufferTime, asapScheduler))),
          map((actions: IndexesProp[]) => flatten(actions)),
        ),
      ),
    ) /* jscpd:ignore-start -- intentionally duplicated */
    .subscribe({
      next: (value) => ngZone.run(() => observer.next(value)),
      error: (err: unknown) => ngZone.run(() => observer.error(err)),
      complete: () => ngZone.run(() => observer.complete()),
    });
  /* jscpd:ignore-end */
}
/**
 * This is an internal function that is used by the Effects to buffer
 * the loadByIndexes actions coming into an effect so that we
 * can dispatch indexes independently but send all the indexes
 * to the server in a single request.
 *
 * NOTE: bufferAction assumes an array of indexes is passed to the action
 * it is buffering.
 *
 * @param ngZone The zone to use to run outside of Angular.
 * @param bufferTime The time to buffer the ids before sending them to the server.
 *     The default is 1ms which only allow the buffer to last until the thread frees up
 *     and is probably all we will ever need.
 * @returns The buffered indexes.
 */
export function bufferIndexesAction(
  ngZone: NgZone,
  /* istanbul ignore next */
  bufferTime = 1, // default value does not need to be tested
): (source: Observable<Action & IndexesProp>) => Observable<IndexesProp> {
  return (
    source: Observable<Action & IndexesProp>,
  ): Observable<IndexesProp> => {
    return new Observable<IndexesProp>((observer) => {
      ngZone.runOutsideAngular(() =>
        mainIndexesBuffer(source, bufferTime, ngZone, observer),
      );
    });
  };
}
