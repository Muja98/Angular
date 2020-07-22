import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  public user : any = {
    email:'',
    password:'',
    name:'',
    surname:'',
    location:'',
    age:18
  }

  public error ={
    email:'',
    password:'',
    name:'',
    surname:'',
    location:'',
    age:''
  }
  constructor(private service: AuthenticationService) { }

  register()
  {
    if(this.user.email.length===0){this.error.email = "Niste uneli E-mail"}else {this.error.email=""};
    if(this.user.password.length===0){this.error.password = "Niste uneli sifru"}else {this.error.password=""}
    if(this.user.name.length===0){this.error.name = "Niste uneli ime"}else{this.error.name=""}
    if(this.user.surname.length===0){this.error.surname = "Niste uneli prezime"}else {this.error.surname=""}
    if(this.user.location.length===0){this.error.location = "Niste uneli lokaciju"}else {this.error.location=""}
    if(this.user.age === null ){this.error.age = "Niste uneli godine"}else {this.error.age=""}
    if(this.user.email.length===0||
       this.user.password.length===0||
       this.user.name.length===0||
       this.user.surname.length===0||
       this.user.location.length===0,
       this.user.age ===null
      )
      {
        return;
      }
    this.service.register(this.user);
  }
  

}
