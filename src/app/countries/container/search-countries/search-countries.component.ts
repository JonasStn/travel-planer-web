import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country } from '@core/services/countries/models';
import {
  CountriesStoreActions,
  CountriesStoreSelectors,
  RootState
} from '@core/store';
import { RouterStoreActions } from '@core/store/router-store';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { debounceTime, filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-countries',
  templateUrl: './search-countries.component.html',
  styleUrls: ['./search-countries.component.scss']
})
export class SearchCountriesComponent implements OnInit, OnDestroy {
  searchCompleteControl: FormControl = new FormControl();
  countries$: Observable<Country[]>;
  unsubscribe$: Subject<void> = new Subject();

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.setupAutoComplete();
    this.countries$ = this.store.select(
      CountriesStoreSelectors.selectCountries
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onCountryClick(code: string) {
    this.store.dispatch(
      RouterStoreActions.RouterGo({ path: ['countries', code, 'details'] })
    );
  }

  private setupAutoComplete() {
    this.searchCompleteControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        filter(value => value !== '')
      )
      .subscribe(searchterm =>
        this.store.dispatch(
          CountriesStoreActions.SearchCountries({ searchterm })
        )
      );
  }
}
