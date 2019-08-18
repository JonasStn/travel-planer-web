import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@shared/material';

import { SearchResultComponent } from './search-result.component';

const COUNTRY_MOCK = {
  name: 'Colombia',
  topLevelDomain: ['.co'],
  alpha2Code: 'CO',
  alpha3Code: 'COL',
  callingCodes: ['57'],
  capital: 'Bogotá',
  altSpellings: ['CO', 'Republic of Colombia', 'República de Colombia'],
  region: 'Americas',
  subregion: 'South America',
  population: 48759958,
  latlng: [4.0, -72.0],
  demonym: 'Colombian',
  area: 1141748.0,
  gini: 55.9,
  timezones: ['UTC-05:00'],
  borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'],
  nativeName: 'Colombia',
  numericCode: '170',
  currencies: [{ code: 'COP', name: 'Colombian peso', symbol: '$' }],
  languages: [
    { iso639_1: 'es', iso639_2: 'spa', name: 'Spanish', nativeName: 'Español' }
  ],
  translations: {
    de: 'Kolumbien',
    es: 'Colombia',
    fr: 'Colombie',
    ja: 'コロンビア',
    it: 'Colombia',
    br: 'Colômbia',
    pt: 'Colômbia',
    nl: 'Colombia',
    hr: 'Kolumbija',
    fa: 'کلمبیا'
  },
  flag: 'https://restcountries.eu/data/col.svg',
  regionalBlocs: [
    {
      acronym: 'PA',
      name: 'Pacific Alliance',
      otherAcronyms: [],
      otherNames: ['Alianza del Pacífico']
    },
    {
      acronym: 'USAN',
      name: 'Union of South American Nations',
      otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
      otherNames: [
        'Unión de Naciones Suramericanas',
        'União de Nações Sul-Americanas',
        'Unie van Zuid-Amerikaanse Naties',
        'South American Union'
      ]
    }
  ],
  cioc: 'COL'
};

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [SearchResultComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    component.country = COUNTRY_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
