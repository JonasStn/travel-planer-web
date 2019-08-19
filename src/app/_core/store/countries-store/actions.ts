import { Country } from '@core/services/countries/models';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  SEARCH_COUNTRIES = '[Countries] Search Countries',
  SEARCH_COUNTRIES_SUCCESS = '[Countries] Search Countries Success',
  SEARCH_COUNTRIES_ERROR = '[Countries] Search Countries Error'
}

export class SearchCountriesAction implements Action {
  readonly type = ActionTypes.SEARCH_COUNTRIES;
  constructor(public payload: { searchterm: string }) {}
}

export class SearchCountriesSuccessAction implements Action {
  readonly type = ActionTypes.SEARCH_COUNTRIES_SUCCESS;
  constructor(public payload: { countries: Country[] }) {}
}

export class SearchCountriesErrorAction implements Action {
  readonly type = ActionTypes.SEARCH_COUNTRIES_ERROR;
  constructor(public payload: { error: string }) {}
}

export type Actions =
  | SearchCountriesAction
  | SearchCountriesSuccessAction
  | SearchCountriesErrorAction;
