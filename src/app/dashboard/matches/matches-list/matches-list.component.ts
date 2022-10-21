import { MatchesService } from './matches.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Match } from './matches.interface';

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
      .subscribe((match) => (this.matches = match));
  }
}
