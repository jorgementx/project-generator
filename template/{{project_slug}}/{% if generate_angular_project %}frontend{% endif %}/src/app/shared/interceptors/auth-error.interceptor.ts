import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';

export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  return next(req).pipe(
    catchError((error) => {
      if (
        error instanceof HttpErrorResponse &&
        error.status === 401 &&
        req.url.includes(environment.backendUrl)
      ) {
        console.warn('Unauthorized! Logging out...');
        auth.token.set(null);
      }
      return throwError(() => error);
    }),
  );
};
