import { CountriesStoreState } from './countries-store';
import { RouterStoreState } from './router-store';
import { MergedRoute } from './router-store/state';

export interface RootState {
  countries: CountriesStoreState.State;
  router: RouterStoreState.MergedRoute;
}
