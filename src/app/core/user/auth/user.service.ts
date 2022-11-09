import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';

import { TokenService } from './token.service';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({
    id: 0,
    firstName: '',
    email: '',
  });
  private userName!: string;

  private firstName!: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  getFirstName() {
    return this.getFirstName;
  }

  getUserName() {
    return this.userName;
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next({ id: 0, firstName: '', email: '' });
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const payloadUser = jwt_decode(token) as User;
    this.userName = payloadUser.firstName;
    console.log(token);

    this.userSubject.next(payloadUser);
  }
}
