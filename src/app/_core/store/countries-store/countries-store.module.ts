import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CountriesEffects } from './effects';
import { countriesReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('countries', countriesReducer),
    EffectsModule.forFeature([CountriesEffects])
  ]
})
export class CountriesStoreModule {}
