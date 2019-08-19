import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Country } from '@core/services/countries/models';
import { RootState } from '@core/store';
import { SearchResultComponent } from '@countries/components/search-result';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppLayoutComponent } from '@shared/app-layout/container';
import { MaterialModule } from '@shared/material';
import { MockComponents } from 'ng-mocks';

import { SearchCountriesComponent } from './search-countries.component';

describe('SearchCountriesComponent', () => {
  let component: SearchCountriesComponent;
  let fixture: ComponentFixture<SearchCountriesComponent>;
  let store: MockStore<{ countries: Country[] }>;
  const initialState = { countries: [] };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        SearchCountriesComponent,
        MockComponents(AppLayoutComponent, SearchResultComponent)
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCountriesComponent);
    store = TestBed.get<Store<RootState>>(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
