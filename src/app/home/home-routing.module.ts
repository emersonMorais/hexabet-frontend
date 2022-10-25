import { AuthguardService } from './../core/user/auth/authguard.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
     path: '',
     component: HomeComponent,
  },
  {
    path: 'login',
    component: SigninComponent,
    canActivate: [AuthguardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
