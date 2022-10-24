import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

const API = `http://localhost:3001`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  //realizar a requisição
  userAuthenticate(userName: string, password: string) {
    return this.http
      .post(
        `${API}/user/login`,
        { userName, password },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const authToken = response.headers.get('x-access-token');

          this.tokenService.setToken(authToken!);
        })
      );
  }
}
