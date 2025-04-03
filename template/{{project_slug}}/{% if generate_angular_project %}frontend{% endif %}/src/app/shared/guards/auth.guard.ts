import { effect, inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const autoLoginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router);

  effect(()=> {
    if (authService.isAuth()) {
      router.navigate(['/my-space']);
    }
  });

  return !authService.isAuth()
};

export const authenticationNeeded: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  effect(()=> {
    if (!authService.isAuth()) {
      router.navigate(['/login']);
    }
  });

  return authService.isAuth();
};