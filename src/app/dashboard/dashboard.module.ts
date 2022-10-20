import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardHeaderModule } from './dashboard/dashboard-header/dashboard-header.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardHeaderModule
  ]
})
export class DashboardModule { }
