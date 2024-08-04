import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EffectService, PartialArrayDefinition } from '@smarttools/smart-ngrx';
import { Observable, of } from 'rxjs';

import { Top } from './top.interface';

@Injectable()
export class TopEffectsService extends EffectService<Top> {
  override loadByIndexes(_: string, __: number, ___: number): Observable<PartialArrayDefinition> {
    throw new Error('Method not implemented.');
  }
  private apiTop = './api/top';

  constructor(private http: HttpClient) {
    super();
  }

  override loadByIds(ids: string[]): Observable<Top[]> {
    return this.http.post<Top[]>(this.apiTop, ids);
  }

  override update(_: Top): Observable<Top[]> {
    return of([]);
  }

  override add(_: Top): Observable<Top[]> {
    return of([]);
  }

  override delete(_: string): Observable<void> {
    return of();
  }
}
