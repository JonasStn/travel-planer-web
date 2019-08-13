import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('@login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('@home/home.module').then(m => m.HomeModule)
  }
];
