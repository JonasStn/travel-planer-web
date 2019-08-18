import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '@core/services/countries';
import { Country } from '@core/services/countries/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  country$: Observable<Country>;

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const {
      snapshot: {
        params: { id }
      }
    } = this.activatedRoute;

    this.country$ = this.countriesService.getCountryByCode(id);
  }
}
