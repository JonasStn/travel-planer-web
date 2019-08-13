import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material';
import { AppLayoutComponent } from './container';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule {}
