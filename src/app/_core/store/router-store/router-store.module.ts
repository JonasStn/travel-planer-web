import { NgModule, Optional, Self } from '@angular/core';
import { Router } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import {
  routerReducer,
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { RouterEffects } from './effects';
import { MergedRouterStateSerializer } from './merged-route-serializer';

export const routerStateConfig = {
  stateKey: 'router' // state-slice name for routing state
};

@NgModule({
  imports: [
    StoreModule.forFeature(routerStateConfig.stateKey, routerReducer),
    StoreRouterConnectingModule.forRoot(routerStateConfig),
    EffectsModule.forFeature([RouterEffects])
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: MergedRouterStateSerializer
    }
  ]
})
export class RouterStoreModule {
  constructor(@Self() @Optional() router: Router) {
    if (router) {
    } else {
      console.error(
        'RouterStoreModule must be imported in the same same level as RouterModule'
      );
    }
  }
}
