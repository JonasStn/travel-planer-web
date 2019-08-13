import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, AuthModule],
  exports: [AuthModule]
})
export class CoreModule {}
