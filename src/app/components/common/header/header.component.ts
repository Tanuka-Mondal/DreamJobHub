import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userLoggedinStatus: boolean = false;
  userRole: string | null = null;
  constructor(private loginService: LoginService){
    this.loginService.isLoggedIn.subscribe(status => {
      this.userLoggedinStatus = status;
      if (status) {
        this.userRole = this.loginService.getUserRole();
      } else {
        this.userRole = null;
      }
    });
  }
  
  // constructor(private storageService:StorageService){
  //   let tokenKeyResult = storageService.getLocalStorageToken('MyToken');
  //   if (tokenKeyResult!=null){
  //     this.userLoggedinStatus = true;
  //   }
  // }
}
