import { DashboardHeaderComponent } from './dashboard-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardHeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardHeaderComponent
  ]
})
export class DashboardHeaderModule { }
