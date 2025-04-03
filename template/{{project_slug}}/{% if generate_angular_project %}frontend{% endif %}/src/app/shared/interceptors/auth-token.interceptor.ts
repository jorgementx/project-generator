import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  if (req.headers.has('Authorization')) {
    const authHeader = req.headers.get('Authorization') || '';
    if (['No-Auth', 'false', 'null', 'none', ''].includes(authHeader)) {
      req = req.clone({
        headers: req.headers.delete('Authorization'),
      });
    }
    return next(req);
  }

  if (auth.isAuth()) {
    req = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${auth.token()}`),
    });
  }
  return next(req);
};
