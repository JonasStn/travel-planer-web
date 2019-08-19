import { Component, OnInit } from '@angular/core';
import { Country } from '@core/services/countries/models';
import { CountriesStoreSelectors, RootState } from '@core/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  country$: Observable<Country>;

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.country$ = this.store.select(
      CountriesStoreSelectors.selectCurrentCountry
    );
  }
}
