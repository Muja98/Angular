import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoeditor',
  templateUrl: './todoeditor.component.html',
  styleUrls: ['./todoeditor.component.css']
})
export class TodoeditorComponent implements OnInit {

  @Input() todoItem: any;
  //@Input() flag: boolean;
  @Output() change: any = new EventEmitter();
  pom = {
    title:'',
    date: ''
    
  }


  constructor() { }
  ngOnInit(): void {}
  pera: any;
  

  log()
  {
    if(this.todoItem===undefined)
    {

    }
    else
    {
      this.pera  = this.todoItem
      this.todoItem===undefined;
      this.change.emit(this.pera)
    }
   
  }

  
}
