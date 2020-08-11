import { DiaryService } from './../../service/diary.service';
import { TodoService } from './../../service/todo.service';
import { HabbitService } from './../../service/habbit.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service'
import {Router} from '@angular/router'
import { Observable } from 'rxjs';
import {User} from '../ngrx/model/user.model';
import {Store} from '@ngrx/store';
import {AppState} from '../ngrx/app.state'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(  private store: Store<AppState>, private router:Router ,private service: AuthenticationService, private hservice: HabbitService, private tservice:TodoService, private dservice: DiaryService) { }
  user: any;
  Habbit:any;
  Todo:any;
  Diary:any;
  user1: Observable<User>
  ngOnInit(): void {
    console.log(this.Habbit)
    this.user1 = this.store.select('user');
    this.user1.subscribe(data=>this.user = data)
    
    this.service.getUserById(this.service.getUser().sub).subscribe((response:any) =>{
      this.hservice.getLastHabbit(response.id).subscribe((el:any)=>{this.Habbit = el
        console.log(this.Habbit)
      })
      this.tservice.getLastTodo(response.id).subscribe((el:any)=>{this.Todo = el
        console.log(this.Todo)
      })
      this.dservice.getLastDiary(response.id).subscribe((el:any)=>{this.Diary = el
        console.log(this.Diary)
      })
   
     
     
    })
    
  }

  redirect(pom)
  {
    
      if(pom.type==1)
      {
        this.router.navigate(['/dashboard/todo/detail/'+pom.id])
      }
      else if(pom.type==2)
      {
        this.router.navigate(['/dashboard/habbit/detail/'+pom.id])
      }
      else if(pom.type==3)
      {
        this.router.navigate(['/dashboard/diary/detail/'+pom.id])
      }
  }

 

}
