import { Country } from '@core/services/countries/models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const adapter: EntityAdapter<Country> = createEntityAdapter<Country>({
  selectId: country => country.alpha3Code
});

export interface State extends EntityState<Country> {
  isLoading: boolean;
  error: string;
  selectedCountryCode: string;
}

export const initialState: State = adapter.getInitialState({
  isLoading: false,
  error: null,
  selectedCountryCode: null
});
