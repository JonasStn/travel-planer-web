import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthModule } from './auth';
import { RootStoreModule } from './store';

@NgModule({
  imports: [HttpClientModule, AuthModule, RootStoreModule]
})
export class CoreModule {}
