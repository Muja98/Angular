import { AuthenticationService } from './../../../service/authentication.service';
import { HabbitService } from './../../../service/habbit.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-habbiteditor',
  templateUrl: './habbiteditor.component.html',
  styleUrls: ['./habbiteditor.component.css']
})
export class HabbiteditorComponent implements OnInit {

id: string = ""
title:string = "";
date:string = "";
description:string ="";
value:number = 1;
validationFlag:boolean = false;
specificTimeInWeek:number = 1;
editFlag = false;
Week:string= ""
WeekDay: string=""
sel={
  prvi:true,
  drugi:false,
  treci:false,
  cetvrti:false
}

error = {
  title : "",
  date : "",
  days1:"",
  days2:"",
  days3:""
}

  constructor(private service:HabbitService,private aservice:AuthenticationService, private router:Router , private aroute:ActivatedRoute) { 
      for(let i=1; i<=31; i++)
      {
        this.monhtns.push({index:i,checked:false})
      }
  }

  ngOnInit(): void {
    this.aroute.paramMap.subscribe(params=>{

    if(params.get('idHabbit')===null){return}
    this.editFlag = true;
     this.service.getHabbitByHabbitId(parseInt(params.get('idHabbit'))).subscribe(
       (x:any)=>{
        this.Week = x.Week;
        this.WeekDay = x.WeekDay;
         this.id = x.id
         this.title = x.Title
         this.date = x.Date
         this.description = x.Description;
        if(x.EveryDayFlag){this.value = 1;}else{this.sel.prvi=false}
        if(x.SpecificTimesFlag){this.value = 2;this.sel.drugi=true}
        if(x.SpecificDaysInWeekFlag){this.value = 3;this.sel.treci=true}
        if(x.SpecificDaysInMonthFlag){this.value = 4;this.sel.cetvrti=true}
        if(this.value==2){this.specificTimeInWeek = parseInt(x.Day)}
        if(this.value==3){
          this.weekDays.forEach((item,i)=>{
            if(x.Day.charAt(i)==='1')
            {
              item.checked=true;
            }
           })
        }
        if(this.value==4)
        {
          this.monhtns.forEach((item,i)=>{
            if(x.Day.charAt(i)==='1'){
              item.checked =true
            }
          })
        }
       }
     )
    })
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

  


  HandleAddNewHabbit()
  {
    this.validationFlag = false;
    if(this.title===""){this.error.title="Please fill the title input"}else{this.error.title=""}
    if(this.date===""){this.error.date="Please fill the date input"}else{this.error.date=""}
    if(this.specificTimeInWeek===null){this.error.days1="Please add a number"}else{this.error.days1=""}
    if(this.checkDayInWeek()){this.error.days2="Please select spcecific day in week"}else{this.error.days2=""}
    if(this.checkDayInMonth()){this.error.days3="Please select spcecific day in Month"}else{this.error.days3=""}
    if(this.title===""||this.date===""||this.specificTimeInWeek===null){this.validationFlag=true}else{this.validationFlag=false}
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    let pom = mm + '/' + dd + '/' + yyyy;
    if(this.validationFlag===true){return;}
    else{

      let habbit = {
        Description: this.description,
        EveryDayFlag: false,
        SpecificTimesFlag: false,
        SpecificDaysInWeekFlag: false,
        SpecificDaysInMonthFlag: false,
        Week: "0000000",
        WeekDay: pom,
        Date: this.date,
        Title: this.title,
        userId: this.aservice.getUser().sub,
        Day: "",
        }
      
        
        if(this.value==1)
        {
          habbit.Day = ""
          habbit.EveryDayFlag= true;
        }
        else if(this.value==2)
        {
          habbit.Day = this.specificTimeInWeek.toString();
          habbit.SpecificTimesFlag= true;
        }
        else if(this.value==3)
        {
          this.weekDays.forEach(element => {
              if(element.checked==true)
              {
                habbit.Day+="1"
              }
              else{
                habbit.Day +="0"
              }
          });
          habbit.SpecificDaysInWeekFlag = true;
        }
        else if(this.value==4)
        {
          this.monhtns.forEach(el=>{
            if(el.checked===true)
            {
                habbit.Day+="1"
            }
            else
            {
              habbit.Day+="0"
            }
          })
          habbit.SpecificDaysInMonthFlag = true;
        }

        if(this.editFlag)
        {
          habbit.Week = this.Week;
          habbit.WeekDay = this.WeekDay
          this.service.editHabbit(this.id,habbit)
        }
        else
        {
          this.service.AddnewHabbit(habbit)
        }
        
        this.router.navigate(['/dashboard/habbit'])
    }
  }
}
