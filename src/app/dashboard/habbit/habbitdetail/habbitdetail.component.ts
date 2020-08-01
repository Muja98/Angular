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
