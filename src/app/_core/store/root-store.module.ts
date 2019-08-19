import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '@env';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CountriesStoreModule } from './countries-store';
import { NotesStoreModule } from './notes-store';
import { RouterStoreModule } from './router-store';

@NgModule({
  imports: [
    CommonModule,
    CountriesStoreModule,
    NotesStoreModule,
    RouterStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ]
})
export class RootStoreModule {}
