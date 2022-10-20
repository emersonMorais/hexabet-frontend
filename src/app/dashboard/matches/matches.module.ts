import { RouterModule } from '@angular/router';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MatchesListComponent],
  imports: [
    CommonModule
  ],
})
export class MatchesModule { }
