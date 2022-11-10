import { Match } from './match.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private http: HttpClient) {}

  findAllMatches():Observable<Match[]> {
    return this.http.get<Match[]>(`${API}/matches`);
  }
}
