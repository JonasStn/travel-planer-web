import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from './app-layout';
import { MaterialModule } from './material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, AppLayoutModule],
  exports: [CommonModule, ReactiveFormsModule, MaterialModule, AppLayoutModule]
})
export class SharedModule {}
