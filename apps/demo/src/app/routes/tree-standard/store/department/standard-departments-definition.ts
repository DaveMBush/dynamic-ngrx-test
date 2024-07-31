import { SmartEntityDefinition } from '@smarttools/smart-ngrx';

import { Department } from '../../../../shared/department/department.interface';
import { departmentEffectsServiceToken } from '../../../../shared/department/department-effects.service-token';

export const standardDepartmentsDefinition: SmartEntityDefinition<Department> =
  {
    entityName: 'departments',
    effectServiceToken: departmentEffectsServiceToken,
    children: {
      virtualChildren: 'virtual'
    },
    defaultRow: (id) => ({
      id,
      name: '',
      children: [],
      virtualChildren: 0,
    }),
  };