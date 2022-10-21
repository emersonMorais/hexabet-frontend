import { DashboardHeaderModule } from './../dashboard/dashboard-header/dashboard-header.module';
import { DashboardHeaderComponent } from './../dashboard/dashboard-header/dashboard-header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatchCardComponent } from './match-card/match-card.component';
import { MatchesListComponent } from './matches-list/matches-list.component';

@NgModule({
  declarations: [MatchesListComponent, MatchCardComponent],
  imports: [CommonModule, DashboardHeaderModule],
})
export class MatchesModule {}
