import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = `http://localhost:3001`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}



  //realizar a requisição
  userAuthenticate(userName: string, password: string){
    return this.http.post(`${API}/user/login`, {userName, password});
  }
}
