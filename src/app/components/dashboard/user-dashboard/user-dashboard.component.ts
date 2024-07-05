import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserNavigateService } from 'src/app/services/user-navigate.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
 
  constructor(private userNavigateService:UserNavigateService) {
    
    
  }
  logout() {
    this.userNavigateService.gotoLogout();
  }
}
