import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router'
import { NgImageSliderModule } from 'ng-image-slider';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [MenuComponent],
  imports: [
    NgbPaginationModule, NgbAlertModule,
    CommonModule,
    NgImageSliderModule,
    NgbModule,
    RouterModule.forChild([
      {path:'', component:MenuComponent}
    ])
  ]
})
export class MainModule { }
