import { Match } from './match.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private http: HttpClient) {}

  findAllMatches() {
    return this.http.get<Match[]>(`${API}/matches`);
  }
}
