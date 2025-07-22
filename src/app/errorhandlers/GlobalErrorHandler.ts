import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    if (environment.production) {
      window.location.href = '/error';
    } else {
      console.error('Global Error:', error);
    }
  }
}
