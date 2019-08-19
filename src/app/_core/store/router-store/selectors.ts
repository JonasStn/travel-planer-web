import { createFeatureSelector, createSelector } from '@ngrx/store';

import { routerStateConfig } from './router-store.module';
import { MergedRouteReducerState } from './state';

export const selectRouterState = createFeatureSelector<MergedRouteReducerState>(
  routerStateConfig.stateKey
);

export const selectMergedRoute = createSelector(
  selectRouterState,
  routerReducerState => routerReducerState.state
);
