import { Match } from './match.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private http: HttpClient) {}

  findAllMatches() {
    return this.http.get<Match[]>(`${environment.urlAPI}/matches`);
  }
}
