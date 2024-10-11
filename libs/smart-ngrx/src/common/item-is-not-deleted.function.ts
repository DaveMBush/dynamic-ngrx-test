/**
 * checks to see if the item is marked as deleted so we know
 * to not merge it into the array.
 * Used by mergeVirtualArrays
 *
 * @param item the item to check
 * @returns true if the item is not deleted, false otherwise
 */
export function itemIsDeleted(item: string | undefined): boolean {
  return item === 'delete';
}
