import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { AddNotesComponent } from './container/add-notes';
import { NotesOverviewComponent } from './container/notes-overview';
import { NotesRoutingModule } from './notes-routing.module';

@NgModule({
  declarations: [NotesOverviewComponent, AddNotesComponent],
  imports: [SharedModule, NotesRoutingModule]
})
export class NotesModule {}
