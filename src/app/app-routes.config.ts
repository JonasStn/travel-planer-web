import { Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    loadChildren: () => import('@login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('@home/home.module').then(m => m.HomeModule)
  }
];
