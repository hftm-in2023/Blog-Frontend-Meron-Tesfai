import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { firstValueFrom } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const oidcSecurityService = inject(OidcSecurityService);

  try {
    const { isAuthenticated } = await firstValueFrom(
      oidcSecurityService.checkAuth(),
    );

    if (isAuthenticated) {
      return true;
    } else {
      router.navigate(['/']);
      return false;
    }
  } catch (error) {
    console.error('Auth check failed:', error);
    router.navigate(['/']);
    return false;
  }
};
