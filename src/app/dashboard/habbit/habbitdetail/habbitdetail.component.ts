import { AuthenticationService } from './../../../service/authentication.service';
import { HabbitService } from './../../../service/habbit.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-habbitdetail',
  templateUrl: './habbitdetail.component.html',
  styleUrls: ['./habbitdetail.component.css']
})
export class HabbitdetailComponent implements OnInit {

  constructor(private service:HabbitService,private aservice:AuthenticationService, private router:Router , private aroute:ActivatedRoute) { 
    for(let i=1; i<=31; i++)
    {
      this.monhtns.push({index:i,checked:false})
    }
}

  monhtns = []
  date:Date = new Date();
  comment:string = "";
  validationFlag:boolean=false;
  title:string="";
  date2:string="";
  description:string="";
  day:string="";
  id:number;
  value:number = 1;
  dys:string = "0";
  comments:any =[ ]
  habbitId = 0;
  error ={
    comment:""
  }

  handleAddComment()
  {
    if(this.comment===""){this.error.comment="Please fill the comment input";this.validationFlag=true}else{this.error.comment = "";this.validationFlag=false}
    let date = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+this.date.getDate()
    
    if(this.validationFlag){return}
    this.service.addNewComment({
      Comment:this.comment,
      Date:date,
      HabbitId:this.habbitId
    })
    this.comment = "";
    window.location.reload();
  }
  
  weekDays=  [
  {title:"Mon",checked:false},
  {title:"Tue",checked:false},
  {title:"Wed",checked:false},
  {title:"Thu",checked:false},
  {title:"Fri",checked:false},
  {title:"Sat",checked:false},
  {title:"Sun",checked:false}
  ]

  
  ngOnInit(): void {
    this.aroute.paramMap.subscribe(params=>{

    if(params.get('idHabbit')===null){return}
    this.habbitId =parseInt(params.get('idHabbit'))
    this.service.getHabbitByHabbitId(parseInt(params.get('idHabbit'))).subscribe(
       
       (x:any)=>{
         this.id = x.id
         this.title = x.Title
         this.date2 = x.Date
         this.description = x.Description;
        if(x.EveryDayFlag)
        {
          this.value = 1;
        }
        if(x.SpecificTimesFlag)
        {
          this.value = 2; 
          this.dys = x.Day
        }
        if(x.SpecificDaysInWeekFlag)
        {
          this.value = 3;
          this.weekDays.forEach((item,i)=>{
            if(x.Day.charAt(i)==='1')
            {
              item.checked=true;
            }
           })
        }
        if(x.SpecificDaysInMonthFlag)
        {
          this.value = 4;
          this.monhtns.forEach((item,i)=>{
            if(x.Day.charAt(i)==='1'){
              item.checked =true
            }
          })
        }
        this.service.getAllNotesById(x.id).subscribe(
          response =>{
            this.comments = response;
          }
        )
       }
     )
    })
  }

}
