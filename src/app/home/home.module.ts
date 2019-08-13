import { NgModule } from '@angular/core';
import { HomeComponent } from './container/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
