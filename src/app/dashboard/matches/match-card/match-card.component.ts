import { Component, Input } from '@angular/core';
import { Match } from '../matches-list/match.interface';

@Component({
  selector: 'hb-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css'],
})
export class MatchCardComponent {
  @Input() team1 = '';
  @Input() team2 = '';

  constructor() {}
}
