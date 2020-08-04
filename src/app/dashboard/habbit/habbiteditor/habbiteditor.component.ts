import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habbiteditor',
  templateUrl: './habbiteditor.component.html',
  styleUrls: ['./habbiteditor.component.css']
})
export class HabbiteditorComponent implements OnInit {

title:string = "";
date:string = "";
description:string ="";
value:number = 1;
validationFlag:boolean = false;
specificTimeInWeek:number = 1
error = {
  title : "",
  date : "",
  days1:"",
  days2:"",
  days3:""
}

  constructor() { 
      for(let i=1; i<=31; i++)
      {
        this.monhtns.push({index:i,checked:false})
      }
  }

  check(item:any)
  {
    item.checked = !item.checked;
  }
  weekDays=  [{title:"Mon",checked:false},
              {title:"Tue",checked:false},
              {title:"Wed",checked:false},
              {title:"Thu",checked:false},
              {title:"Fri",checked:false},
              {title:"Sat",checked:false},
              {title:"Sun",checked:false}]
              
  monhtns = []
  
  checkDayInWeek()
  {
      let flag:any = false;
      this.weekDays.forEach(element => {
          if(element.checked===true){flag=true;}
      });
      if(flag == true)
      {
        return false
      }
      else return true
  }

  checkDayInMonth()
  {
      let flag:any = false;
      this.monhtns.forEach(element => {
          if(element.checked===true){flag=true;}
      });
      if(flag == true)
      {
        return false
      }
      else {return true}
  }
  setValue(value)
  {
    this.error.days1 = "";
    this.error.days2 = "";
    this.error.days3 = "";
    this.value = value;
  }
  ngOnInit(): void {
  }

  HandleAddNewHabbit()
  {
    this.validationFlag = false;
    if(this.title===""){this.error.title="Please fill the title input"}else{this.error.title=""}
    if(this.date===""){this.error.date="Please fill the date input"}else{this.error.date=""}
    if(this.specificTimeInWeek===null){this.error.days1="Please add a number"}else{this.error.days1=""}
    if(this.checkDayInWeek()){this.error.days2="Please select spcecific day in week"}else{this.error.days2=""}
    if(this.checkDayInMonth()){this.error.days3="Please select spcecific day in Month"}else{this.error.days3=""}
    if(this.title===""||this.date===""||this.specificTimeInWeek===null){this.validationFlag=true}else{this.validationFlag=false}
   
    if(this.validationFlag===true){return;}
  }
}
