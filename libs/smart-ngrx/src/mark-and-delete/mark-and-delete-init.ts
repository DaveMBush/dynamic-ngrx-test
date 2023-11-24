import { assert } from '../common/assert.function';
import { isNullOrUndefined } from '../common/is-null-or-undefined.function';
import { MarkAndDeleteInit } from '../types/mark-and-delete-init.interface';

const markAndDeleteRecord = {} as Record<string, MarkAndDeleteInit>;

/**
 * Function that allows us to register the `markAndDeleteInit` globally
 * and for each entity.
 *
 * @param entity the entity to register
 * @param markAndDelete the mark and delete init for the entity
 * @returns void
 */
export function registerMarkAndDeleteInit(
  entity: string,
  markAndDelete: MarkAndDeleteInit,
): void {
  markAndDeleteRecord[entity] = markAndDelete;
}

/**
 * retrieves previously registered `MarkAndDeleteInit` for the entity
 * @param entity the entity or ${feature}:${entity} to retrieve
 * @returns `MarkAndDeleteInit`
 */
export function getMarkAndDeleteInit(entity: string): MarkAndDeleteInit {
  assert(
    !isNullOrUndefined(markAndDeleteRecord[entity]),
    `MarkAndDeleteInit for ${entity} is not registered`,
  );
  return markAndDeleteRecord[entity];
}
