import { Action } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

import { RouterActionTypes } from './actions';

export function ofRoute(
  route: string | string[]
): OperatorFunction<Action, Action> {
  return filter(
    (
      action: { payload: { path: string } } & TypedAction<
        RouterActionTypes.CHANGE
      >
    ) => {
      const isRouteAction = action.type === RouterActionTypes.CHANGE;
      if (isRouteAction) {
        const {
          payload: { path }
        } = action;
        if (Array.isArray(route)) {
          return route.includes(path);
        } else {
          return path === route;
        }
      }
      return isRouteAction;
    }
  );
}
