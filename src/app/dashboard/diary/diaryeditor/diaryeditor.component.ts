import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diaryeditor',
  templateUrl: './diaryeditor.component.html',
  styleUrls: ['./diaryeditor.component.css']
})
export class DiaryeditorComponent implements OnInit {

  public title:string="";
  public date:string="";
  public text:string="";
  public validationFlag: boolean = false;

  error={
    title:"",
    date:"",
    text:""
  }

  handleAddNewEntry()
  {
    if(this.title===""){this.error.title="Please fill the title input"}else{this.error.title=""}
    if(this.date===""){this.error.date="Please fill the date input"}else{this.error.date=""}
    if(this.text===""){this.error.text="Please fill the diary text input"}else{this.error.text=""}
    if(this.title===""||this.date===""||this.text===""){this.validationFlag=true}else{this.validationFlag=false}

    if(this.validationFlag===true){return;}
  }
  constructor() { }

  ngOnInit(): void {
  }

}
