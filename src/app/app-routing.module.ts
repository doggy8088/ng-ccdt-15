import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'page1',
        loadChildren: () =>
          import('./pages/page1/page1.module').then((m) => m.Page1Module),
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
          import('./pages/tables/tables.module').then((m) => m.TablesModule),
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
