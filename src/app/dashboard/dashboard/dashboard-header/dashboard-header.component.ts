import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user.interface';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'hb-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-component.css']
})
export class DashboardHeaderComponent {

  user$: Observable<User>
  user!: User

  constructor(userService: UserService){
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user);
  }


}
