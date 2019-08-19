import { Country } from '@core/services/countries/models';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './state';

const getError = (state: State): string => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;
const getCountries = (state: State): Country[] => state.countries;

export const selectCountriesState: MemoizedSelector<
  object,
  State
> = createFeatureSelector('countries');

export const selectCountriesError: MemoizedSelector<
  object,
  string
> = createSelector(
  selectCountriesState,
  getError
);

export const selectCountriesIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectCountriesState,
  getIsLoading
);

export const selectCountries: MemoizedSelector<
  object,
  Country[]
> = createSelector(
  selectCountriesState,
  getCountries
);
