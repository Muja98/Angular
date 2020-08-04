import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: AuthenticationService) { }
  user: any;
  ngOnInit(): void {
  
    this.service.getUserById(this.service.getUser().sub).subscribe(response =>{this.user = response})
    
  }

 

}
