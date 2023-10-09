import { createSelector } from '@ngrx/store';

import { selectSharedState2 } from '../shared.selectors';

export const selectCurrentLocationId = createSelector(
  selectSharedState2,
  (state) => {
    if (state.currentLocation.length > 0) {
      return state.currentLocation;
    }
    return state.locations.ids[0] ?? '';
  },
);
