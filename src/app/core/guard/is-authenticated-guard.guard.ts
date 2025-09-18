import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { firstValueFrom } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const oidcSecurityService = inject(OidcSecurityService);

  try {
    const { isAuthenticated, accessToken } = await firstValueFrom(
      oidcSecurityService.checkAuth(),
    );

    if (isAuthenticated && hasRole(accessToken, 'user')) {
      return true;
    } else {
      alert('Bitte Melde dich wieder an');
      return false;
    }
  } catch (error) {
    console.error('Auth check failed:', error);
    router.navigate(['/']);
    return false;
  }
};

function hasRole(token: string, role: string): boolean {
  const decoded = JSON.parse(atob(token?.split('.')[1]));
  const roles: string[] = decoded?.realm_access?.roles || [];
  return roles.includes(role);
}
