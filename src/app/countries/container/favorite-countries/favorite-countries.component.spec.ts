import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppLayoutComponent } from '@shared/app-layout/container';
import { MockComponent } from 'ng-mocks';

import { FavoriteCountriesComponent } from './favorite-countries.component';

describe('FavoriteCountriesComponent', () => {
  let component: FavoriteCountriesComponent;
  let fixture: ComponentFixture<FavoriteCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FavoriteCountriesComponent,
        MockComponent(AppLayoutComponent)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
