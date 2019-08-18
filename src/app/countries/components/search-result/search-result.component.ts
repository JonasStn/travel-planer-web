import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '@core/services/countries/models';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input() country: Country;
  @Output() countryClick: EventEmitter<string> = new EventEmitter();
}
