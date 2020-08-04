import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habbitdetail',
  templateUrl: './habbitdetail.component.html',
  styleUrls: ['./habbitdetail.component.css']
})
export class HabbitdetailComponent implements OnInit {

  constructor() {}
  date:Date = new Date();
  comment:string = "";
  validationFlag:boolean=false;

  comments:any =[
    {title:"prvi komentar",date:"23/4/2020"},
    {title:"drugi komentar",date:"21/2/2020"},
    {title:"treci komentar",date:"20/1/2020"}
  ]

  error ={
    comment:""
  }

  handleAddComment()
  {
    if(this.comment===""){this.error.comment="Please fill the comment input";this.validationFlag=true}else{this.error.comment = "";this.validationFlag=false}
    let date = this.date.getDate()+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear()
    if(this.validationFlag){return}
    this.comments.push({title:this.comment,date:date})
    this.comment = "";
  }
  
  weekDays=  [
  {title:"Mon",checked:true},
  {title:"Tue",checked:false},
  {title:"Wed",checked:true},
  {title:"Thu",checked:false},
  {title:"Fri",checked:true},
  {title:"Sat",checked:false},
  {title:"Sun",checked:false}
  ]
  ngOnInit(): void {
  }

}
