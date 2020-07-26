import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoeditor',
  templateUrl: './todoeditor.component.html',
  styleUrls: ['./todoeditor.component.css']
})
export class TodoeditorComponent implements OnInit {
  public flag:boolean = false;
  public todo:string = "";
  constructor() { }


  ngOnInit(): void {
  }

  HadnleAddTaslToDatabase()
  {
    alert(this.todo)
    this.flag = false;
    this.todo = "";
  }

  HandleCancelAddTask()
  {
    this.flag = false;
    this.todo = "";
  }

  HandleAddTask()
  {
    this.flag = true;
  }
}
