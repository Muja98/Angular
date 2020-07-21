import { AuthenticationService } from './service/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

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
