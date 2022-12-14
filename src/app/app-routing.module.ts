import { AuthguardService } from './core/user/auth/authguard.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MatchesListComponent } from './dashboard/matches/matches-list/matches-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', component:HomeComponent, canActivate: [AuthguardService] },
  { path: '', pathMatch:'full', redirectTo: 'home'},

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: 'user/:userName',
    component: DashboardComponent
  },
  {
    path:'matches',
    component: MatchesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
