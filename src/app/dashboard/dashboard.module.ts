import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgSimpleSidebarModule } from 'ng-simple-sidebar';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'dashboard', component:DashboardComponent}
    ]),
    NgSimpleSidebarModule
  ]
})
export class DashboardModule { }
