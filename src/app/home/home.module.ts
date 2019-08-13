import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/_shared';
import { HomeComponent } from './container/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
