import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppLayoutComponent } from '@shared/app-layout/container';
import { MockComponent } from 'ng-mocks';

import { NotesOverviewComponent } from './notes-overview.component';

describe('NotesOverviewComponent', () => {
  let component: NotesOverviewComponent;
  let fixture: ComponentFixture<NotesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesOverviewComponent, MockComponent(AppLayoutComponent)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
