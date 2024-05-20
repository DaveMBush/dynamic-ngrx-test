// jscpd:ignore-start
// intentionally duplicated.
import { createSelector } from '@ngrx/store';

import { castTo } from '@smart/smart-ngrx/common/cast-to.function';
import { createSmartSelector } from '@smart/smart-ngrx/selector/create-smart-selector.function';
import { SmartNgRXRowBaseSelector } from '@smart/smart-ngrx/types/smart-ngrx-row-base-selector.type';

import { Location } from '../../../../shared/locations/location.interface';
import { selectLocationsDepartments } from '../locations/location.selectors';
import { selectTreeNoRefreshState } from '../tree-no-refresh.selectors';

export const selectTopEntities = createSelector(
  selectTreeNoRefreshState,
  (state) => {
    return state.top;
  },
);

export const selectTopLocations = createSmartSelector(selectTopEntities, [
  {
    childFeature: 'tree-no-refresh',
    childEntity: 'locations',
    parentField: 'locations',
    parentFeature: 'tree-no-refresh',
    parentEntity: 'top',
    childSelector: castTo<SmartNgRXRowBaseSelector>(selectLocationsDepartments),
  },
]);

// It seems logical to put selectLocations in the locations.selectors.ts
// but that causes a circular reference
export const selectLocations = createSelector(selectTopLocations, (tops) => {
  return (
    tops.ids.length === 1 ? tops.entities[tops.ids[0]]!.locations : []
  ) as Location[];
});
// jscpd:ignore-end
