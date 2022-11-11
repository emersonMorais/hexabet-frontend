import { Match } from './match.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from './Resultado';

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private http: HttpClient) {}

  findAllMatches():Observable<Match[]> {
    return this.http.get<Match[]>(`${API}/matches`);
  }

  fazerAposta(guess: String, matchId: Number):Observable<any> {
    let userId: number = 1;
    return this.http.post<any>(`${API}/bets`, {guess,  matchId, userId})
  }
}
