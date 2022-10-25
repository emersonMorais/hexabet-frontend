import { UserService } from './core/user/auth/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './core/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HexaBet';

  user$: Observable<User>

  constructor(userService: UserService){
    this.user$ = userService.getUser();
  }



}
