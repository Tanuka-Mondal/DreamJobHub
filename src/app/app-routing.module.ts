import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './components/users/register-user/register-user.component';
import { LoginUserComponent } from './components/users/login-user/login-user.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { LogoutComponent } from './components/common/logout/logout.component';
import { authGuard } from './guards/auth.guard';
import { DisplayJobsComponent } from './components/jobs/display-jobs/display-jobs.component';
import { AddJobsComponent } from './components/jobs/add-jobs/add-jobs.component';
import { DisplayJobComponent } from './components/jobs/display-job/display-job.component';
import { DisplayUserComponent } from './components/users/display-user/display-user.component';
import { EditJobComponent } from './components/jobs/edit-job/edit-job.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/users/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [authGuard] },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [authGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [authGuard] },
  { path: 'display-jobs', component: DisplayJobsComponent },
  { path: 'add-job', component: AddJobsComponent },
  { path: 'display-job/:id', component: DisplayJobComponent },
  { path: 'display-user/:id', component: DisplayUserComponent },
  { path: 'edit-job/:id', component: EditJobComponent },
  { path: 'edit-user/:id', component: EditUserComponent},
  { path: 'landing-page', component: LandingComponent},
  { path: 'profile', component: ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
