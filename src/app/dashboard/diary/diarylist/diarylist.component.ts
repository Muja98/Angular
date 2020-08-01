import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diarylist',
  templateUrl: './diarylist.component.html',
  styleUrls: ['./diarylist.component.css']
})
export class DiarylistComponent implements OnInit {

  constructor() { }

  niz = [
    {title:"Monday",date:"3/8/2020"},
    {title:"Tuesday",date:"4/8/2020"},
    {title:"Wednesday",date:"5/9/2020"},
    {title:"Thursday",date:"6/9/2020"}
  ]

  ngOnInit(): void {
  }

}
