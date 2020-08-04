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
    age:18,
    image:""
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

  base64textString = [];

  onUploadChange(evt: any) {
    const file = evt.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  
  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.user.image=this.base64textString[0];

  }

  register()
  {
    if(this.user.email.length===0){this.error.email = "Please fill the E-mail input"}else {this.error.email=""};
    if(this.user.password.length===0){this.error.password = "Please fill the Password input"}else {this.error.password=""}
    if(this.user.name.length===0){this.error.name = "Please fill the Name input"}else{this.error.name=""}
    if(this.user.surname.length===0){this.error.surname = "Please fill the Surname input"}else {this.error.surname=""}
    if(this.user.location.length===0){this.error.location = "Please fill the Location input"}else {this.error.location=""}
    if(this.user.age === null ){this.error.age = "Please fill the Age input"}else {this.error.age=""}
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
