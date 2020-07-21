import { AuthenticationService } from './../service/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private service: AuthenticationService) { }

  public email:string = "";
  public password: string = "";

  public error ={
    email:"",
    password:""
  }

  logIn()
  {
    if(this.email.length===0){this.error.email = "Niste uneli E-mail!"}
    else{this.error.email = ""}
    if(this.password.length===0){this.error.password = "Niste uneli šifru!"} 
    else{this.error.password = ""}

    if(this.email.length===0 || this.password.length==0)return;


    this.service.login(this.email,this.password);
    
    if(this.service.isLoggedIn()===false)
    {
      this.error.password = "Niste uneli dobro E-maili ili šifru"
    }
   
  }

}
