import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:MenuComponent}
    ])
  ]
})
export class MainModule { }
