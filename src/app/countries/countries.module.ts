import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { CountryDetailsComponent } from './container/country-details';
import { FavoriteCountriesComponent } from './container/favorite-countries';
import { SearchCountriesComponent } from './container/search-countries';
import { CountriesRoutingModule } from './countries-routing.module';

@NgModule({
  declarations: [
    SearchCountriesComponent,
    CountryDetailsComponent,
    FavoriteCountriesComponent
  ],
  imports: [SharedModule, CountriesRoutingModule]
})
export class CountriesModule {}
