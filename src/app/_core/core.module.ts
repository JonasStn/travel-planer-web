import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AuthModule } from './auth';
import { RootStoreModule } from './store';

@NgModule({
  imports: [
    HttpClientModule,
    AuthModule,
    RootStoreModule,
    LeafletModule.forRoot()
  ]
})
export class CoreModule {}
