import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const auth2Interceptor: HttpInterceptorFn = (req, next) => {

    // const http = inject(HttpClient);

    // Get the access token from your authentication service
    const accessToken = localStorage.getItem('token');

    // Clone the request and add the Authorization header
    const authRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });

  return next(authRequest);

};
