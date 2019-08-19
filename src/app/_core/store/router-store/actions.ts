import { NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';

export enum RouterActions {
  GO = '[Router] Go',
  BACK = '[Router] Back',
  FORWARD = '[Router] Forward',
  CHANGE = '[Router] Route Change'
}

export class RouterGo implements Action {
  readonly type = RouterActions.GO;

  constructor(
    public payload: {
      path: any[];
      queryParams?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class RouterBack implements Action {
  readonly type = RouterActions.BACK;
}

export class RouterForward implements Action {
  readonly type = RouterActions.FORWARD;
}

export class RouteChange implements Action {
  readonly type = RouterActions.CHANGE;
  constructor(public payload: { params: any; path: string }) {}
}
