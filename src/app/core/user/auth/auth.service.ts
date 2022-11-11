import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { AuthToken } from './authToken.interface';
import { Observable } from 'rxjs';


const API = 'http://localhost:8080'


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}


  userAuthenticate(userName: string, password: string):Observable<AuthToken> {

    let token_endpoint = `${API}/oauth/token`;
    let client_id = `hexabet`;
    let client_secret = `hexabet450`;

    const httpOtions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`)
      })
    }

    const body = 'client_id={0}&client_secret={1}&grant_type=password&username={2}&password={3}'
        .replace('{0}', client_id)
        .replace('{1}', client_secret)
        .replace('{2}', userName)
        .replace('{3}', password);


    return this.http
      .post<AuthToken>(
        token_endpoint,
        body,
        httpOtions,
      ).pipe(
        tap((response) => {
          const authToken = response.access_token
          this.userService.setToken(authToken!);
        })
      );
  }
}
