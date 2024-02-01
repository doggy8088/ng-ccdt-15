import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { InjectionToken, importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, Routes, provideRouter } from '@angular/router';
import { AuthGuard } from './app/auth.guard';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { LayoutComponent } from './app/pages/layout/layout.component';
import { LoginComponent } from './app/pages/login/login.component';
import { Login2Component } from './app/pages/login2/login2.component';
import { apiUrl } from './environments/environment';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './app/auth.interceptor';
import { CommonModule } from '@angular/common';
import { auth2Interceptor } from './app/auth2.interceptor';

export const API_URL = new InjectionToken<string>('apiUrl');

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'page1',
        loadComponent: () =>
          import('./app/pages/page1/page1.component'),
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { pageTitle: 'Dashboard' },
      },
      {
        path: 'tables',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./app/pages/tables/tables.routes'),
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    { provide: API_URL, useValue: apiUrl},

    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // provideHttpClient(
    //   withInterceptorsFromDi()
    // ),

    provideHttpClient(
      withInterceptors([
        auth2Interceptor
      ])
    ),


    // importProvidersFrom(CommonModule),
    // importProvidersFrom(FormsModule),
    // importProvidersFrom(ReactiveFormsModule),
  ],
})
  .catch((err) => console.error(err));
