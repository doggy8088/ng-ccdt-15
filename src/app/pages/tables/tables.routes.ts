
import { Routes } from '@angular/router';
import { TablesComponent } from './tables.component';
import { API_URL } from 'src/main';

export default [
  {
    path: '',
    providers: [
      { provide: API_URL, useValue: 'http://localhost:4200' }
    ],
    children: [
      { path: ':name', component: TablesComponent }
    ],
  },
] satisfies Routes;
