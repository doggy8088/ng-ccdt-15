import { state } from '@angular/animations';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

// export function auth2Guard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): CanActivateFn {
export const auth2Guard: CanActivateFn = (route, state) => {
  var router = inject(Router);
  var token = localStorage.getItem('token');
  if (token) {
    return true;
  } else {
    console.log('您尚未登入，請先登入');
    return router.createUrlTree(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
  }
};
