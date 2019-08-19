import { Injectable } from '@angular/core';
import { CountriesService } from '@core/services/countries';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';

import {
  ActionTypes,
  SearchCountriesAction,
  SearchCountriesErrorAction,
  SearchCountriesSuccessAction
} from './actions';

@Injectable()
export class CountriesEffects {
  constructor(
    private countriesService: CountriesService,
    private actions$: Actions
  ) {}

  @Effect()
  loadCountriesEffect$: Observable<Action> = this.actions$.pipe(
    ofType<SearchCountriesAction>(ActionTypes.SEARCH_COUNTRIES),
    pluck('payload', 'searchterm'),
    switchMap(searchterm => this.searchCountries$(searchterm))
  );

  private searchCountries$(searchterm) {
    return this.countriesService.searchCountry(searchterm).pipe(
      map(countries => new SearchCountriesSuccessAction({ countries })),
      catchError(err =>
        of(
          new SearchCountriesErrorAction({
            error: 'Error loading countries ' + err
          })
        )
      )
    );
  }
}
