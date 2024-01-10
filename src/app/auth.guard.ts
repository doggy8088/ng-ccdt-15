import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      var token = localStorage.getItem('token');
      if (token) {
        return true;
      } else {
        console.log('您尚未登入，請先登入');
        return this.router.createUrlTree(['/login'], {
          queryParams: {
            returnUrl: state.url
          }
        });
      }
  }

}
