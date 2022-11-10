import { UserService } from './core/user/auth/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './core/user/user.interface';
import { AuthService } from './core/user/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HexaBet';

  user$: Observable<User>
  isLogged: Boolean

  constructor(userService: UserService){
    this.user$ = userService.getUser();
    this.isLogged = userService.isLogged();
  }



}
