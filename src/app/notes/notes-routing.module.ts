import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNotesComponent } from './container/add-notes';
import { NotesOverviewComponent } from './container/notes-overview';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    path: 'overview',
    component: NotesOverviewComponent
  },
  {
    path: 'add',
    component: AddNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
