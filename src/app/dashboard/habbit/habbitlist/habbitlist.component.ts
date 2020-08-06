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
  all:any=[]
  itemsPerPage:number = 5;
  itemsCount:number = 0;
  page:number = 1;
  from = 0;
  to = this.itemsPerPage;
  numbers:any
  constructor(private service:HabbitService, private aserice:AuthenticationService) {
    this.numbers = Array(7).fill(0).map((x,i)=>i);

    var d = new Date();
    var n = d.getDay();
    var pom = [];

    for(let i=n; i<7; i++)
    {
      pom.push(this.weekDays[i]);
    }
    console.log(n)
    for(let i=0; i<n; i++)
    {
      pom.push(this.weekDays[i]);
    }
    this.weekDays=[];
    this.weekDays = pom;
   }

   ngOnInit(): void {
   

    this.getAll()
    this.handleGetAll();
  }

  weekDays = ['Mo','Tu','We','Th','Fr','Sa','Su'];

  handleGetAll()
  {
    this.service.getAllHabbit().subscribe(
        res=>{this.all=res}
    )
  }

  handleOverallEstimate()
  {
    let br = 0;
    this.pomniz.forEach(element => {
      for(let i=0; i<7; i++)
      {
        if(element.Week.charAt(i)==='1')
        {
          br++;
        }
      }
    });
    let all = this.pomniz.length * 7;

    return  Math.round((br/all)*100);
  }

  handleGlobalEstimate()
  {
    let br =0;
    let alla =0;
 
          this.all.forEach(element => {
              for(let i=0; i<7; i++)
              {
                if(element.Week.charAt(i)==='1')
                {
                  br++;
                }
              }
              alla = this.all.length * 7;
          });

    return  Math.round((br/alla)*100);
  }

  handleDelete(id)
  {
    this.service.deleteHabbit(id);
    window.location.reload();
  }
  
  editWeekDay(j,n,item)
  {
    let pom = ""
    for(let i=0; i<7; i++)
    {
      if(i==j)
      {
        pom = pom.concat(n);
      }
      else
      {
        pom = pom.concat(item.Week.charAt(i))
      }
    }
    item.Week = pom;
    this.service.updateWeekInHabbit(item.id,item.Week,"")
  } 

  DayDifference(date)
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    let pom = mm + '/' + dd + '/' + yyyy;
    
    var date1 = new Date(date);
    var date2 = new Date(pom);
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    return Difference_In_Days
  }


  getAll()
  {
    this.service.getAllHabbitByUserId(this.aserice.getUser().sub).subscribe(
      response =>{this.niz = response
                  this.niz.forEach(element => {
                      let pom = this.DayDifference(element.WeekDay);
                  
                      if(pom>0)
                      {
                        for(let j=0; j<pom; j++)
                        {
                            let after = ""
                            for(let i=1; i<7; i++)
                            {
                              after = after.concat(element.Week.charAt(i))
                            }
                            after = after.concat('0');
                            element.Week = after

                            var today = new Date();
                            var dd = String(today.getDate()).padStart(2, '0');
                            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                            var yyyy = today.getFullYear();
                            let pom = mm + '/' + dd + '/' + yyyy;

                            this.service.updateWeekInHabbit(element.id,element.Week,pom);
                        }
                       
                      }
                  });
                  this.pomniz = response
                  this.itemsCount = this.niz.length}
  )
  }

  shift()
  {
    this.niz.forEach((el:any) => {
        let after = ""
        for(let i=1; i<7; i++)
        {
          after = after.concat(el.Week.charAt(i))
        }
        after = after.concat('0');
        el.Week = after
    });
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

  handleEstimate(item)
  {
    let br = 0;
    for(let i=0; i<7; i++)
    {
      if(item.Week.charAt(i)==='1')
      {
        br++;
      }
    }
    return Math.round((br/7)*100)
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


 