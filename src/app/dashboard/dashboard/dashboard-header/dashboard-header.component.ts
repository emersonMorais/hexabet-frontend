import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user.interface';
import { UserService } from '../../../core/user/auth/user.service';

@Component({
  selector: 'hb-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header-component.css']
})
export class DashboardHeaderComponent {

  user$: Observable<User>


  constructor( private userService: UserService, private router: Router){
    this.user$ = userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['home']);
  }

  
}
