import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiarylistComponent } from './diarylist/diarylist.component';
import { DiaryeditorComponent } from './diaryeditor/diaryeditor.component';
import { DiarydetailComponent } from './diarydetail/diarydetail.component';
import { DiaryComponent } from './diary.component';



@NgModule({
  declarations: [DiarylistComponent, DiaryeditorComponent, DiarydetailComponent, DiaryComponent],
  imports: [
    CommonModule
  ]
})
export class DiaryModule { }
