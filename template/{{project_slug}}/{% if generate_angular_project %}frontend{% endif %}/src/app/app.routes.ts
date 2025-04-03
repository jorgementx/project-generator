import { Routes } from '@angular/router';
import {
  authenticationNeeded,
  autoLoginGuard,
} from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
    canActivate: [autoLoginGuard],
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./singup/singup.component').then((c) => c.SingupComponent),
    canActivate: [autoLoginGuard],
  },
  {
    path: 'my-space',
    loadComponent: () =>
      import('./my-space/my-space.component').then((c) => c.MySpaceComponent),
    canMatch: [authenticationNeeded],
    // canMatch: [() => inject(AuthService).isAuth()],
  },
];
