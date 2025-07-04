import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, catchError } from 'rxjs';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    if (environment) {
      window.location.href = '/error';
    } else {
      console.error('Global Error:', error);
    }
  }
}

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('HTTP Error:', error);
      return throwError(() => error);
    }),
  );
};
