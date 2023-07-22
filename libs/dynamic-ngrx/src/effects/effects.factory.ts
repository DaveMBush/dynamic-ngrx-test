import { inject, InjectionToken } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';

import { castTo } from '../common/cast-to.function';
import { actionFactory } from '../functions/action.factory';
import { StringLiteralSource } from '../ngrx-internals/string-literal-source.type';
import { bufferAction } from './buffer-action.function';
import { EffectService } from './effect-service';
import { EffectsFactory } from './effects-factory.interface';

/**
 * The effects factory creates a new set of effects for the
 * `Action` source provided and calls the service represented
 * by the `InjectionToken` provided.
 *
 * @param source - The source of the actions for this effect
 * @param effectServiceToken - The token for the service that
 *   the resulting effect will call.
 * @returns The effect for the source provided
 *
 * @see `EffectsFactory`
 * @see `EffectService`
 */
export function effectsFactory<Source extends string, T>(
  source: StringLiteralSource<Source>,
  effectServiceToken: InjectionToken<EffectService<T>>
): EffectsFactory<T> {
  const actions = actionFactory<Source, T>(source);
  return castTo<EffectsFactory<T>>({
    load: createEffect(
      (
        actions$ = inject(Actions),
        actionService = inject(effectServiceToken)
      ) => {
        return actions$.pipe(
          ofType(actions.load),
          switchMap(() => actionService.load()),
          map((rows) => actions.loadSuccess({ rows }))
        );
      },
      { functional: true }
    ),
    loadByIds: createEffect(
      (
        actions$ = inject(Actions),
        actionService = inject(effectServiceToken)
      ) => {
        return actions$.pipe(
          ofType(actions.loadByIds),
          bufferAction(),
          mergeMap((ids) => actionService.loadByIds(ids)),
          map((rows) => actions.loadByIdsSuccess({ rows }))
        );
      },
      { functional: true }
    ),
  });
}
