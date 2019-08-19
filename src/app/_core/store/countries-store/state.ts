import { Country } from '@core/services/countries/models';

export interface State {
  countries: Country[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  countries: [],
  isLoading: false,
  error: null
};
