import { Country } from '@core/services/countries/models';
import { createAction, props } from '@ngrx/store';

export enum SearchCountriesActionTypes {
  SEARCH_COUNTRIES = '[Countries] Search Countries',
  SEARCH_COUNTRIES_SUCCESS = '[Countries] Search Countries Success',
  LOAD_COUNTRY = '[Countries] Load Country',
  LOAD_COUNTRY_SUCCESS = '[Countries] Load Country Success',
  COUNTRIES_ERROR = '[Countries] Countries Error',
  SET_SELECTED_COUNTRY = '[Countries] Set Selected Country'
}

export const SearchCountries = createAction(
  SearchCountriesActionTypes.SEARCH_COUNTRIES,
  props<{ searchterm: string }>()
);

export const SearchCountriesSuccess = createAction(
  SearchCountriesActionTypes.SEARCH_COUNTRIES_SUCCESS,
  props<{ countries: Country[] }>()
);

export const LoadCountry = createAction(
  SearchCountriesActionTypes.LOAD_COUNTRY,
  props<{ countryCode: string }>()
);
export const LoadCountrySuccess = createAction(
  SearchCountriesActionTypes.LOAD_COUNTRY_SUCCESS,
  props<{ country: Country }>()
);

export const CountriesError = createAction(
  SearchCountriesActionTypes.COUNTRIES_ERROR,
  props<{ error: string }>()
);

export const SetSelectedCountry = createAction(
  SearchCountriesActionTypes.SET_SELECTED_COUNTRY,
  props<{ selectedCountryCode: string }>()
);
