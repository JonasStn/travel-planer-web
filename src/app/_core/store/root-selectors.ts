import { createSelector, MemoizedSelector } from '@ngrx/store';

import { CountriesStoreSelectors } from './countries-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  CountriesStoreSelectors.selectCountriesError,
  (countriesError: string) => countriesError
);

export const isLoading: MemoizedSelector<object, boolean> = createSelector(
  CountriesStoreSelectors.selectCountriesIsLoading,
  (countriesLoading: boolean) => countriesLoading
);
