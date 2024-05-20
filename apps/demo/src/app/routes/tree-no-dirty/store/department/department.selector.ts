import { createSelector } from '@ngrx/store';

import { castTo } from '@smart/smart-ngrx/common/cast-to.function';
import { createSmartSelector } from '@smart/smart-ngrx/selector/create-smart-selector.function';
import { SmartNgRXRowBaseSelector } from '@smart/smart-ngrx/types/smart-ngrx-row-base-selector.type';

import { selectDepartmentChildren } from '../department-children/department-child.selector';
import { selectTreeNoDirtyState } from '../tree-no-dirty.selectors';

export const selectDepartments = createSelector(
  selectTreeNoDirtyState,
  (state) => {
    return state.departments;
  },
);

export const selectDepartmentsChildren = createSmartSelector(
  // parent table selector
  selectDepartments,
  [
    {
      childFeature: 'tree-no-dirty',
      childEntity: 'departmentChildren',
      parentFeature: 'tree-no-dirty',
      parentEntity: 'departments',
      parentField: 'children',
      childSelector: castTo<SmartNgRXRowBaseSelector>(selectDepartmentChildren),
    },
  ],
);
