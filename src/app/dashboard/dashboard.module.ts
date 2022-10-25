import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardHeaderModule } from './dashboard/dashboard-header/dashboard-header.module';
import { MatchesModule } from './matches/matches.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    DashboardHeaderModule,
    MatchesModule,
  ],
  exports: [DashboardHeaderModule, MatchesModule],
})
export class DashboardModule {}
