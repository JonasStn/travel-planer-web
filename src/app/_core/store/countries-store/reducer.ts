import { Action, createReducer, on } from '@ngrx/store';

import * as CountriesActions from './actions';
import { adapter, initialState } from './state';

const reducer = createReducer(
  initialState,
  on(CountriesActions.SearchCountries, state => ({
    ...state,
    error: null,
    isLoading: true
  })),
  on(CountriesActions.SearchCountriesSuccess, (state, { countries }) =>
    adapter.addAll(countries, state)
  ),
  on(CountriesActions.LoadCountry, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(CountriesActions.LoadCountrySuccess, (state, { country }) =>
    adapter.addOne(country, state)
  ),
  on(CountriesActions.CountriesError, (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  })),
  on(CountriesActions.SetSelectedCountry, (state, { selectedCountryCode }) => ({
    ...state,
    selectedCountryCode
  }))
);

export function countriesReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
