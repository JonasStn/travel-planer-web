import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CountriesService } from '@core/services/countries';
import { AppLayoutComponent } from '@shared/app-layout/container';
import { MaterialModule } from '@shared/material';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { CountryDetailsComponent } from './country-details.component';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      providers: [
        {
          provide: CountriesService,
          useValue: {
            getCountryByCode: jest.fn().mockReturnValue(of({ name: 'test' }))
          }
        }
      ],
      declarations: [CountryDetailsComponent, MockComponent(AppLayoutComponent)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
