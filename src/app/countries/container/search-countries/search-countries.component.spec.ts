import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppLayoutModule } from '@shared/app-layout';
import { MockModule } from 'ng-mocks';

import { SearchCountriesComponent } from './search-countries.component';

describe('SearchCountriesComponent', () => {
  let component: SearchCountriesComponent;
  let fixture: ComponentFixture<SearchCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MockModule(AppLayoutModule)],
      declarations: [SearchCountriesComponent]
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
