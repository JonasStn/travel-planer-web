import { Country } from '@core/services/countries/models';
import { Dictionary } from '@ngrx/entity';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { adapter, State } from './state';

const { selectEntities, selectAll } = adapter.getSelectors();

const getError = (state: State): string => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;
const getSelectedCountryCode = (state: State): string =>
  state.selectedCountryCode;

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

export const selectSelectedCountryCode: MemoizedSelector<
  object,
  string
> = createSelector(
  selectCountriesState,
  getSelectedCountryCode
);

export const selectCountriesEntities: MemoizedSelector<
  object,
  Dictionary<Country>
> = createSelector(
  selectCountriesState,
  selectEntities
);

export const selectCountries: MemoizedSelector<
  object,
  Country[]
> = createSelector(
  selectCountriesState,
  selectAll
);

export const selectCurrentCountry: MemoizedSelector<
  object,
  Country
> = createSelector(
  selectCountriesEntities,
  selectSelectedCountryCode,
  (countriesEntities, selectedCountryCode) =>
    countriesEntities[selectedCountryCode]
);
