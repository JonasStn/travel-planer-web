import { Injectable } from '@angular/core';
import { CountriesService } from '@core/services/countries';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  pluck,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs/operators';

import { RootState } from '..';
import { ofRoute } from '../router-store/route-operator';
import * as CountriesActions from './actions';
import { selectCountriesEntities } from './selectors';

@Injectable()
export class CountriesEffects {
  constructor(
    private countriesService: CountriesService,
    private actions$: Actions,
    private store: Store<RootState>
  ) {}

  @Effect()
  loadCountriesEffect$: Observable<Action> = this.actions$.pipe(
    ofType(CountriesActions.SearchCountries),
    pluck('searchterm'),
    switchMap(searchterm => this.searchCountries$(searchterm))
  );

  @Effect()
  loadCountryEffect$ = this.actions$.pipe(
    ofType(CountriesActions.LoadCountry),
    withLatestFrom(this.store.select(selectCountriesEntities)),
    filter(([payload, countries]) => !!!countries[payload.countryCode]),
    switchMap(([payload, _countries]) => this.loadCountry$(payload.countryCode))
  );

  @Effect()
  countriesRoutedEffect$ = this.actions$.pipe(
    ofRoute(':id/details'),
    pluck('params'),
    tap(({ id }) =>
      this.store.dispatch(CountriesActions.LoadCountry({ countryCode: id }))
    ),
    map(({ id }) =>
      CountriesActions.SetSelectedCountry({ selectedCountryCode: id })
    )
  );

  private searchCountries$(searchterm: string) {
    return this.countriesService.searchCountry(searchterm).pipe(
      map(countries => CountriesActions.SearchCountriesSuccess({ countries })),
      catchError(() =>
        of(
          CountriesActions.CountriesError({
            error: 'Error loading countries'
          })
        )
      )
    );
  }

  private loadCountry$(code: string) {
    return this.countriesService.getCountryByCode(code).pipe(
      map(country => CountriesActions.LoadCountrySuccess({ country })),
      catchError(() =>
        of(
          CountriesActions.CountriesError({
            error: 'Error loading countries'
          })
        )
      )
    );
  }
}
