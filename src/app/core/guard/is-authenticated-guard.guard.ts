import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map } from 'rxjs';

export const isAuthenticatedGuardGuard: CanActivateFn = () => {
  const oidcSecurityService = inject(OidcSecurityService);

  return oidcSecurityService.checkAuth().pipe(
    map(({ isAuthenticated }) => {
      if (isAuthenticated) {
        return true;
      } else {
        oidcSecurityService.authorize();
        return false;
      }
    }),
  );
};
