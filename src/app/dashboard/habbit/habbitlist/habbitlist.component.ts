import { AuthenticationService } from './../../../service/authentication.service';
import { HabbitService } from './../../../service/habbit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habbitlist',
  templateUrl: './habbitlist.component.html',
  styleUrls: ['./habbitlist.component.css']
})
export class HabbitlistComponent implements OnInit {
  

  dateSearch:string = "";
  niz:any = []
  pomniz:any=[]
  itemsPerPage:number = 5;
  itemsCount:number = 0;
  page:number = 1;
  from = 0;
  to = this.itemsPerPage;
  constructor(private service:HabbitService, private aserice:AuthenticationService) {

   }

   ngOnInit(): void {
   

    this.getAll()
  }

  weekDays = [{title:'Mo',color:1},
              {title:'Tu',color:2},
              {title:'We',color:0},
              {title:'Th',color:2},
              {title:'Fr',color:3},
              {title:'Sa',color:2},
              {title:'Su',color:1}];
  
  editWeekDay(i,n)
  {
    this.weekDays[i].color=n;
  } 


  getAll()
  {
    this.service.getAllHabbitByUserId(this.aserice.getUser().sub).subscribe(
      response =>{this.niz = response
                  this.pomniz = response
                  this.itemsCount = this.niz.length}
  )
  }
 
  setValue(value)
  {
    this.niz = [];
    if(value==0)
    {
      this.niz = this.pomniz
      this.itemsCount = this.niz.length
      return;
    }
    this.pomniz.forEach((element:any) => {
      if(value==1)
      {
        if(element.EveryDayFlag){this.niz.push(element)}
      }
      if(value==2)
      {
        if(element.SpecificTimesFlag){this.niz.push(element)}
      }
      if(value==3)
      {
        if(element.SpecificDaysInWeekFlag){this.niz.push(element)}
      }
      if(value==4)
      {
        if(element.SpecificDaysInMonthFlag){this.niz.push(element)}
      }
    })
    this.itemsCount = this.niz.length
   
  
  }

  handlePageNumber=(pageNumber)=>{
    
    if(!pageNumber || pageNumber===undefined || pageNumber === null) {
        this.from = 0;
        this.to = this.itemsPerPage;
    } else {
        if(pageNumber === Math.floor(this.itemsCount / this.itemsPerPage) + 1) {
          this.from = (pageNumber-1)*this.itemsPerPage;
          this.to = this.from+(this.itemsCount-this.from);
           

        } else {
          this.from = (pageNumber - 1) * this.itemsPerPage;
          this.to = this.from + this.itemsPerPage;
        }
    }
  }
 
  handelSearch()
  {
    if(this.dateSearch==""){
      this.getAll();
    }
    this.service.getHabbitByDate(this.dateSearch).subscribe(
      response=>{
        this.niz = [];
        this.niz = response;
      }
    )
  }


  check(item:any)
  {
    if(item.EveryDayFlag)
    {
      return "Every day"
    }
    if(item.SpecificTimesFlag)
    {
      return item.Day+" times a week"
    }
    if(item.SpecificDaysInWeekFlag)
    {
        let res = "Day in week: ";
        var pom:string = item.Day.toString()
        if(pom.charAt(0)==='1'){res = res.concat('Mon ')}
        if(pom.charAt(1)==='1'){res = res.concat('Tue ')}
        if(pom.charAt(2)==='1'){res = res.concat('Wed ')}
        if(pom.charAt(3)==='1'){res = res.concat('Thu ')}
        if(pom.charAt(4)==='1'){res = res.concat('Fri ')}
        if(pom.charAt(5)==='1'){res = res.concat('Sat ')}
        if(pom.charAt(6)==='1'){res = res.concat('Sun ')}
        
        return res;
    }
    if(item.SpecificDaysInMonthFlag)
    {
      let mn = new Date().getMonth();
      let yr = new Date().getUTCFullYear();
      let days = new Date(yr,mn,0).getDate();
    
      let pom = item.Day.toString();
      
      let res = "Day in months: ";
      for(let i=0; i<31; i++)
      {
        if((days+1)>=(i+1))
        {
          if(pom.charAt(i)==='1')
          {
              res = res.concat((i+1)+" ")
          }
        }
      }
      return res;
    }
    return "error"
  }
}


 // title:"Get up in 5AM",
  //   date:"10/2/2020",
  //   dayFlag:true,
  //   weekFlag:false,
  //   specificDayInWeek:false,
  //   montly:false,
  //   day:""
  //   },
  //   {
  //     title:"Meditation",
  //     date:"10/2/2020",
  //     dayFlag:false,
  //     weekFlag:true,
  //     specificDayInWeek:false,
  //     montly:false,
  //     day:4
  //   },
  //   {
  //     title:"Cold Shower",
  //     date:"10/2/2020",
  //     dayFlag:false,
  //     weekFlag:false,
  //     specificDayInWeek:true,
  //     montly:false,
  //     day:1010101
  //   },
  //   {
  //     title:"Read",
  //     date:"10/2/2020",
  //     dayFlag:false,
  //     weekFlag:false,
  //     specificDayInWeek:false,
  //     montly:true,
  //     day: '0001110110001111010010010000000'
  //   },