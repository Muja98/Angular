import { map,take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import {AuthenticationService }from '../service/authentication.service';
import {Router} from '@angular/router'
import {GetUser} from './ngrx/actions/user.actions'
import {Store} from '@ngrx/store';
import {User} from './ngrx/model/user.model';
import * as userActions from './ngrx/actions/user.actions';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

import {AppState} from './ngrx/app.state'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  user1: Observable<User>
  constructor(private service: AuthenticationService,private router:Router, private store: Store<AppState>) {
      
   }
  user: any;
  urlRoute:string  = ""
  ngOnInit(): void {
    if(!this.service.isLoggedIn())
    {
      this.router.navigate(['/'])
    }
    //this.service.getUserById(this.service.getUser().sub).subscribe(response =>{this.user = response})
    this.urlRoute = window.location.href
    this.store.dispatch(new GetUser(this.service.getUser().sub));
    this.user1 = this.store.select('user');
    this.user1.subscribe(data=>this.user = data)
  }

  loadUser()
  {
    this.user = {}
  }
  
  pomWidth
  pomwidth2
  onResized2(event: ResizedEvent)
  {
    this.pomwidth2 = event.newWidth;
   
  }
  onResized(event: ResizedEvent) {
    if(event.newWidth<=920)
    {
      this.mobile = false;
    }
    else
    {
      this.mobile = true;
    }
  }
  HandleLogOut( ){
    this.service.logout();
    this.router.navigate(['/'])
  }
  ngonchanfe
  mobile = true;
  public width = "280px"
  public picture = "open"
  public flag = true;
  
  public height = document.body.scrollHeight+"px";
  Povecaj()
  {
    this.picture="close"
    this.width="280px"
    this.flag = true;
  }

  Smanji()
  {
    this.picture = "open"
    this.width = "65px"
    this.flag = false;
  }
  
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
}

}