import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CountriesService } from '@core/services/countries';
import { SearchResultComponent } from '@countries/components/search-result';
import { AppLayoutComponent } from '@shared/app-layout/container';
import { MaterialModule } from '@shared/material';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { SearchCountriesComponent } from './search-countries.component';

describe('SearchCountriesComponent', () => {
  let component: SearchCountriesComponent;
  let fixture: ComponentFixture<SearchCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: CountriesService,
          useValue: { searchCountry: jest.fn().mockRejectedValue(of([])) }
        }
      ],
      declarations: [
        SearchCountriesComponent,
        MockComponents(AppLayoutComponent, SearchResultComponent)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
