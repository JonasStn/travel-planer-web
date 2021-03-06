import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, pluck, tap } from 'rxjs/operators';

import * as RouterActions from './actions';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private store: Store<any>
  ) {
    this.listenToRouter();
  }

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActions.RouterGo),
    tap(({ path, queryParams, extras }) =>
      this.router.navigate(path, { queryParams, ...extras })
    )
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActions.RouterBack),
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActions.RouterForward),
    tap(() => this.location.forward())
  );

  private listenToRouter() {
    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        pluck('snapshot')
      )
      .subscribe((snapshot: ActivatedRouteSnapshot) =>
        this.store.dispatch(
          RouterActions.RouteChange({
            params: { ...snapshot.params },
            path: snapshot.routeConfig.path
          })
        )
      );
  }
}
