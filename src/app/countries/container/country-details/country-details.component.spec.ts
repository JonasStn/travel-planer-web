import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Country } from '@core/services/countries/models';
import { RootState } from '@core/store';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppLayoutComponent } from '@shared/app-layout/container';
import { MaterialModule } from '@shared/material';
import { MockComponent } from 'ng-mocks';

import { CountryDetailsComponent } from './country-details.component';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  let store: MockStore<{ countries: Country[] }>;
  const initialState = {
    countries: {
      ids: ['JOR', 'IRN'],
      entities: {
        JOR: {
          name: 'Jordan'
        }
      }
    },
    selectedCountryCode: 'IRN'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })],
      declarations: [CountryDetailsComponent, MockComponent(AppLayoutComponent)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    store = TestBed.get<Store<RootState>>(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
