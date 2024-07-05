import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserNavigateService } from 'src/app/services/user-navigate.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private userNavigateService:UserNavigateService) {      
  }
  // logout(){
  //   this.userNavigateService.gotoLogout();
  // }
}
