import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habbitlist',
  templateUrl: './habbitlist.component.html',
  styleUrls: ['./habbitlist.component.css']
})
export class HabbitlistComponent implements OnInit {

  constructor() { }
  list = [1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
  }

}
