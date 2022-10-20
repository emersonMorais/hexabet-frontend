import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardHeaderComponent } from './dashboard-header.component';

@NgModule({
  declarations: [DashboardHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    DashboardHeaderComponent,
  ],
})
export class DashboardHeaderModule { }
