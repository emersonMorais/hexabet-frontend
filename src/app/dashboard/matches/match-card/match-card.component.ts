import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../matches-list/match.interface';
import { MatchesService } from '../matches-list/matches.service';
import { Resultado } from '../matches-list/Resultado';

@Component({
  selector: 'hb-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css'],
})
export class MatchCardComponent implements OnInit {
  @Input() team1 = '';
  @Input() team2 = '';

  matches: Match[] = [];

  constructor(private matchesService: MatchesService) {}

  ngOnInit(): void {
    this.matchesService
      .findAllMatches()
      .subscribe((match: Match[]) =>
        match.forEach((matchh) => this.matches.push(matchh))
      );
    console.log(this.matches);
  }

  fazerAposta(guess: string, matchId: Number) {
    this.matchesService
      .fazerAposta(guess, matchId)
      .subscribe(
          () => alert('aposta criada')
        );
  }
}
