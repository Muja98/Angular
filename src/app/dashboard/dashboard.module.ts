import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgSimpleSidebarModule } from 'ng-simple-sidebar';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { TodoeditorComponent } from './todo/todoeditor/todoeditor.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { TododetailComponent } from './todo/tododetail/tododetail.component';

@NgModule({
  declarations: [DashboardComponent, UserComponent, TodoComponent, TodoeditorComponent, TodolistComponent, TododetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'dashboard', component:DashboardComponent,
      children:[
        {path:'user',component:UserComponent,},
        {path:'todo',component:TodoComponent}
      ]
      }
   
    
    ]),
    NgSimpleSidebarModule
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
