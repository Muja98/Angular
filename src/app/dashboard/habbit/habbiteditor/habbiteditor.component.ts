import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habbiteditor',
  templateUrl: './habbiteditor.component.html',
  styleUrls: ['./habbiteditor.component.css']
})
export class HabbiteditorComponent implements OnInit {

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
  value:number = 1;
  setValue(value)
  {
    this.value = value;
  }
  ngOnInit(): void {
  }

}
