import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  baseUrl: string;

  constructor() {
    this.baseUrl = environment.countriesApiUrl;
  }
}
