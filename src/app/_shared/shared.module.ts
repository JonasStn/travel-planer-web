import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from './app-layout';
import { MaterialModule } from './material';

@NgModule({
  imports: [CommonModule, MaterialModule, AppLayoutModule],
  exports: [CommonModule, MaterialModule, AppLayoutModule]
})
export class SharedModule {}
