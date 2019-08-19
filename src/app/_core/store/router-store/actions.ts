import { NavigationExtras } from '@angular/router';
import { createAction, props } from '@ngrx/store';

export enum RouterActionTypes {
  GO = '[Router] Go',
  BACK = '[Router] Back',
  FORWARD = '[Router] Forward',
  CHANGE = '[Router] Route Change'
}

export const RouterGo = createAction(
  RouterActionTypes.GO,
  props<{ path: any[]; queryParams?: object; extras?: NavigationExtras }>()
);
export const RouterBack = createAction(RouterActionTypes.BACK);
export const RouterForward = createAction(RouterActionTypes.FORWARD);
export const RouteChange = createAction(
  RouterActionTypes.CHANGE,
  props<{ params: any; path: string }>()
);
