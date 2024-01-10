import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { API_URL } from 'src/app/app.module';


@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule
  ],
  providers: [
    { provide: API_URL, useValue: 'http://localhost:4200'}
  ],
})
export class TablesModule { }
