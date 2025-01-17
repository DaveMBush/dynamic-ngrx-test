import { SmartEntityDefinition } from '@smarttools/smart-ngrx';

import { Location } from '../../../../shared/locations/location.interface';
import { locationEffectsServiceToken } from '../../../../shared/locations/location-effects.service-token';

export const noRefreshLocationsDefinition: SmartEntityDefinition<Location> = {
  entityName: 'locations',
  effectServiceToken: locationEffectsServiceToken,
  markAndDelete: {
    markDirtyFetchesNew: false,
    markDirtyTime: 2 * 60 * 1000,
    removeTime: 4 * 60 * 1000,
  },
  defaultRow: function noRefreshLocationsDefaultRowFunction(id) {
    return {
      id,
      name: '',
      departments: [],
    };
  },
};
