import { CardComponent } from './user/card/card.component';
import { DiaryeditorComponent } from './diary/diaryeditor/diaryeditor.component';

import { DiarylistComponent } from './diary/diarylist/diarylist.component';
import { DiarydetailComponent } from './diary/diarydetail/diarydetail.component';
import { DiaryComponent } from './diary/diary.component';
import { HabbitComponent } from './habbit/habbit.component';
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
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { HabbitlistComponent } from './habbit/habbitlist/habbitlist.component';
import { HabbitdetailComponent } from './habbit/habbitdetail/habbitdetail.component';
import { HabbiteditorComponent } from './habbit/habbiteditor/habbiteditor.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SatPopoverModule } from '@ncstate/sat-popover';
@NgModule({
  declarations: [HabbitlistComponent,DiaryeditorComponent,DiarylistComponent,DiarydetailComponent,DiaryComponent, HabbitdetailComponent, HabbiteditorComponent, HabbitComponent,DashboardComponent, UserComponent, TodoComponent, TodoeditorComponent, TodolistComponent, TododetailComponent,CardComponent],
  imports: [
    SatPopoverModule,
    BrowserAnimationsModule,
    NgbModule,
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    AngularResizedEventModule,
    RouterModule.forRoot([
      {path:'dashboard', component:DashboardComponent,
      children:[
        {path:'user',component:UserComponent},
        {path:'todo',component:TodoComponent},
        {path:'todo/detail/:idTodo',component:TododetailComponent},
        {path:'newtodo',component:TodoeditorComponent},
        {path:'todo/:idTodo',component:TodoeditorComponent},
        {path:'newhabbit',component:HabbiteditorComponent},
        {path:'habbit/detail/:idHabbit',component:HabbitdetailComponent},
        {path:'habbit',component:HabbitComponent},
        {path:'habbit/:idHabbit',component:HabbiteditorComponent},
        {path:'diary',component:DiaryComponent},
        {path:'diary/detail/:idDiary',component:DiarydetailComponent},
        {path:'diary/:idDiary',component:DiaryeditorComponent},
        {path:'newdiary',component:DiaryeditorComponent}
      ]
      }
   
    
    ]),
    NgSimpleSidebarModule
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
