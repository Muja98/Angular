import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabbitlistComponent } from './habbitlist/habbitlist.component';
import { HabbitdetailComponent } from './habbitdetail/habbitdetail.component';
import { HabbiteditorComponent } from './habbiteditor/habbiteditor.component';
import { HabbitComponent } from './habbit.component';



@NgModule({
  declarations: [HabbitlistComponent, HabbitdetailComponent, HabbiteditorComponent, HabbitComponent],
  imports: [
    CommonModule
  ]
})
export class HabbitModule { }
