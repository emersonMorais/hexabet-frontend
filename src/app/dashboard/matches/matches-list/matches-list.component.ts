import { MatchesService } from './matches.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Match } from './match.interface';

@Component({
  selector: 'hb-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css'],
})
export class MatchesListComponent implements OnInit {
  matches: Match[] = [];

  constructor(private matchesService: MatchesService) {}

  ngOnInit(): void {
    this.matchesService
      .findAllMatches()
      .subscribe((match: Match[]) =>
        match.forEach((matchh) => this.matches.push(matchh)
        )
    
      );
    console.log(this.matches);
  }
}
