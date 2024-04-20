import { TestBed } from '@angular/core/testing';
import { createEntityAdapter } from '@ngrx/entity';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { entityDefinitionCache } from '../registrations/entity-definition-cache.function';
import { ChildDefinition } from '../types/child-definition.interface';
import { SmartEntityDefinition } from '../types/smart-entity-definition.interface';
import { SmartNgRXRowBase } from '../types/smart-ngrx-row-base.interface';
import { realOrMocked } from './real-or-mocked.function';
import { store as storeFunction } from './store.function';

const real = {
  ids: ['department1'],
  entities: {
    department1: {
      id: 'department1',
      name: 'Department 1',
      isDirty: false,
    },
  },
};

const defaultObject = {
  id: 'department2',
  name: 'to be fetched',
  isDirty: false,
};

describe('realOrMocked', () => {
  const childDefinition = {
    childFeature: 'feature',
    childEntity: 'entity',
    parentFeature: 'parentFeature',
    parentEntity: 'parentEntity',
  } as unknown as ChildDefinition<SmartNgRXRowBase>;
  entityDefinitionCache('feature', 'entity', {
    entityName: 'entity',
    entityAdapter: createEntityAdapter(),
    defaultRow: (id: string) => ({ isDirty: false, name: '', id }),
    effectServiceToken: null,
  } as unknown as SmartEntityDefinition<typeof defaultObject>);
  entityDefinitionCache('parentFeature', 'parentEntity', {
    entityName: 'parentEntity',
    entityAdapter: createEntityAdapter(),
    defaultRow: (id: string) => ({ isDirty: false, name: '', id }),
    effectServiceToken: null,
  } as unknown as SmartEntityDefinition<typeof defaultObject>);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: {} })],
    });
    const store = TestBed.inject(MockStore);
    storeFunction(store);
  });
  it('returns the real value if available', () => {
    const r = realOrMocked(real, 'department1', defaultObject, childDefinition);

    expect(JSON.parse(JSON.stringify(r))).toEqual({
      id: 'department1',
      name: 'Department 1',
      isDirty: false,
    });
  });

  it('returns the mocked value if real one is not available', () => {
    const r = realOrMocked(real, 'department2', defaultObject, childDefinition);

    expect(r).toEqual({
      id: 'department2',
      name: 'to be fetched',
      isDirty: false,
    });
  });
});
