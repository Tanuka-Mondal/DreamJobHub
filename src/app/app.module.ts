import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/users/register-user/register-user.component';
import { LoginUserComponent } from './components/users/login-user/login-user.component';
import { DisplayUsersComponent } from './components/users/display-users/display-users.component';
import { DisplayUserComponent } from './components/users/display-user/display-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavComponent } from './components/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LogoutComponent } from './components/common/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { DisplayJobsComponent } from './components/jobs/display-jobs/display-jobs.component';
import { AddJobsComponent } from './components/jobs/add-jobs/add-jobs.component';
import { DisplayJobComponent } from './components/jobs/display-job/display-job.component';
import { EditJobComponent } from './components/jobs/edit-job/edit-job.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { MatSelectModule } from '@angular/material/select';
import { DeleteJobComponent } from './components/jobs/delete-job/delete-job.component';
import { DeleteUserComponent } from './components/users/delete-user/delete-user.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/users/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    DisplayUsersComponent,
    DisplayUserComponent,
    NavComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    DisplayJobsComponent,
    AddJobsComponent,
    DisplayJobComponent,
    EditJobComponent,
    EditUserComponent,
    DeleteJobComponent,
    DeleteUserComponent,
    LandingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
