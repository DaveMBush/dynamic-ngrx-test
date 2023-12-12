import { createEntityAdapter } from '@ngrx/entity';

import { psi } from '../common/theta.const';
import { MarkAndDelete } from '../types/mark-and-delete.interface';
import { getMarkAndDeleteEntityMap } from './mark-and-delete-entity.map';

/**
 * registers the rows with the mark and delete functionality.
 *
 * @param feature the feature the rows belong to
 * @param entity the entity within the feature the rows belong to
 * @param rows the rows to register with the mark and delete functionality
 * @returns the rows that were passed in with the `isDirty` flag set to false
 */
export function registerEntityRows<T extends MarkAndDelete>(
  feature: string,
  entity: string,
  rows: T[],
): T[] {
  const adapter = createEntityAdapter<T>();
  return rows.map((row) => {
    const markAndDeleteMap = getMarkAndDeleteEntityMap(feature, entity);
    const markAndDeleteKey = `${entity}${psi}${adapter.selectId(row)}`;
    markAndDeleteMap.delete(markAndDeleteKey);
    markAndDeleteMap.set(markAndDeleteKey, Date.now());
    // this is getting called from a reducer so we can't mutate the existing row
    return { ...row, isDirty: false };
  });
}

/**
 * unregisters the rows with the mark and delete functionality.
 *
 * @param feature the feature the ids belong to
 * @param entity the entity the ids belong to
 * @param ids the ids to unregister with the mark and delete functionality
 * @returns the ids that were passed in
 */
export function unregisterEntityRows(
  feature: string,
  entity: string,
  ids: string[],
): string[] {
  const markAndDeleteMap = getMarkAndDeleteEntityMap(feature, entity);
  return ids.map((id) => {
    const markAndDeleteKey = `${entity}-${id}`;
    markAndDeleteMap.delete(markAndDeleteKey);
    return id;
  });
}