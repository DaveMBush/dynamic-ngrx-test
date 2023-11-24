import {
  EnvironmentProviders,
  importProvidersFrom,
  makeEnvironmentProviders,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { isNullOrUndefined } from '../common/is-null-or-undefined.function';
import { registerMarkAndDeleteInit } from '../mark-and-delete/mark-and-delete-init';
import { StoreEffects } from '../selector/store.effects';
import { MarkAndDeleteInit } from '../types/mark-and-delete-init.interface';

/**
 * This provides and all the common SmartNgRX providers.
 *
 * @param config the configuration for the mark and delete functionality
 * @returns `EnvironmentProviders` that will get used to provide
 * the common providers to the root of the application.
 *
 * This must be called, even if you have no options to provide,
 * for SmartNgRX to work.
 *
 * @see `MarkAndDeleteInit`
 */
export function provideSmartNgRX(
  config?: MarkAndDeleteInit,
): EnvironmentProviders {
  const localConfig =
    config ??
    ({
      markDirtyTime: 15 * 60 * 1000, // 15 minutes
      removeTime: 30 * 60 * 1000, // 30 minutes
      runInterval: 60000, // 1 minute
      markDirtyFetchesNew: true,
    } as MarkAndDeleteInit);
  if (isNullOrUndefined(localConfig.markDirtyTime)) {
    localConfig.markDirtyTime = 15 * 60 * 1000; // 15 minutes
  }
  if (
    (isNullOrUndefined(localConfig.removeTime) ||
      localConfig.removeTime! < localConfig.markDirtyTime!) &&
    localConfig.markDirtyTime! > -1
  ) {
    localConfig.removeTime = localConfig.markDirtyTime! * 2; // 30 minutes
  }
  if (
    isNullOrUndefined(localConfig.runInterval) ||
    localConfig.runInterval! < 1
  ) {
    localConfig.runInterval = 60000; // 1 minute
  }
  registerMarkAndDeleteInit('θglobalθ', localConfig);
  return makeEnvironmentProviders([
    StoreEffects,
    importProvidersFrom(EffectsModule.forFeature([StoreEffects])),
  ]);
}
