import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserNavigateService } from 'src/app/services/user-navigate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  TokenKeyName:string='MyToken';
  RoleKeyName:string="UserRole";
  constructor(private userNavigateService: UserNavigateService,
    private storageService: StorageService,
    private loginService:LoginService) {
      this.storageService.clearLocalStorageByKey(this.TokenKeyName);   
      this.storageService.clearLocalStorageByKey(this.RoleKeyName);
      this.loginService.logout();  
      this.userNavigateService.gotoLogin();
  }
}
