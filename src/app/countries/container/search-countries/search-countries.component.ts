import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CountriesService } from '@core/services/countries';
import { Country } from '@core/services/countries/models';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  filter,
  map,
  startWith,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-search-countries',
  templateUrl: './search-countries.component.html',
  styleUrls: ['./search-countries.component.scss']
})
export class SearchCountriesComponent implements OnInit {
  searchCompleteControl: FormControl = new FormControl();
  countries$: Observable<Country[]>;

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.countries$ = this.setupAutoComplete();
  }

  setupAutoComplete(): Observable<Country[]> {
    return this.searchCompleteControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      filter(value => value !== ''),
      switchMap(value => {
        return this.countriesService.searchCountry(value).pipe(
          map(result => result || []),
          catchError(() => of([]))
        );
      })
    );
  }

  onCountryClick(code: string) {
    this.router.navigate(['countries', code, 'details']);
  }
}
