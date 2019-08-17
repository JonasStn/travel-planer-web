import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryDetailsComponent } from './container/country-details';
import { FavoriteCountriesComponent } from './container/favorite-countries';
import { SearchCountriesComponent } from './container/search-countries';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search'
  },
  {
    path: 'search',
    component: SearchCountriesComponent
  },
  {
    path: 'favorites',
    component: FavoriteCountriesComponent
  },
  {
    path: ':id/details',
    component: CountryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule {}
