import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppLayoutModule } from './app-layout';
import { MapComponent } from './components/map';
import { MaterialModule } from './material';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    AppLayoutModule,
    LeafletModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    AppLayoutModule,
    LeafletModule,
    MapComponent
  ]
})
export class SharedModule {}
