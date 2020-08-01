import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habbitlist',
  templateUrl: './habbitlist.component.html',
  styleUrls: ['./habbitlist.component.css']
})
export class HabbitlistComponent implements OnInit {
  //months = [31,28,31,30,31,30,31,31,30,31,30,31]
  constructor() { console.log(this.check(this.niz[3])) }
  niz=[
    {
    title:"Get up in 5AM",
    date:"10-2-2020",
    dayFlag:true,
    weekFlag:false,
    specificDayInWeek:false,
    montly:false,
    day:""
    },
    {
      title:"Meditation",
      date:"10-2-2020",
      dayFlag:false,
      weekFlag:true,
      specificDayInWeek:false,
      montly:false,
      day:4
    },
    {
      title:"Cold Shower",
      date:"10-2-2020",
      dayFlag:false,
      weekFlag:false,
      specificDayInWeek:true,
      montly:false,
      day:1010101
    },
    {
      title:"Read",
      date:"10-2-2020",
      dayFlag:false,
      weekFlag:false,
      specificDayInWeek:false,
      montly:true,
      day: '0001110110001111010010010000000'
    },

]
  ngOnInit(): void {
  }


  check(item:any)
  {
    if(item.dayFlag)
    {
      return "Remind every day"
    }
    if(item.weekFlag)
    {
      return "Remind "+item.day+" times a week"
    }
    if(item.specificDayInWeek)
    {
        let res = "Remind in: ";
        var pom:string = item.day.toString()
        if(pom.charAt(0)==='1'){res = res.concat('Mon ')}
        if(pom.charAt(1)==='1'){res = res.concat('Tue ')}
        if(pom.charAt(2)==='1'){res = res.concat('Wed ')}
        if(pom.charAt(3)==='1'){res = res.concat('Thu ')}
        if(pom.charAt(4)==='1'){res = res.concat('Fri ')}
        if(pom.charAt(5)==='1'){res = res.concat('Sat ')}
        if(pom.charAt(6)==='1'){res = res.concat('Sun')}
        
        return res;
    }
    if(item.montly)
    {
      let mn = new Date().getMonth();
      let yr = new Date().getUTCFullYear();
      let days = new Date(yr,mn,0).getDate();
    
      let pom = item.day.toString();
      
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
