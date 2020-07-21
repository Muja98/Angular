import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {


  public email: string = "";
  private user
  constructor(public service: AuthenticationService){}

  logIn()
  {
    this.service.login('stefaneli95@gmail.com','mataluka');
    this.email = "Facebook"
   
  }

    

  logOut()
  {
    this.email = this.service.getUser()['email'];
    this.service.logout();
  }

}
