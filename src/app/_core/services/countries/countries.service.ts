import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';

import { Country } from './models/countries.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.countriesApiUrl;
  }

  searchCountry(name: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.baseUrl}/name/${name}`);
  }

  getCountryByCode(code: string): Observable<Country> {
    return this.httpClient.get<Country>(`${this.baseUrl}/alpha/${code}`);
  }
}
