import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('title') title:string;
  @Input("text") text: string;
  @Input("type") type:number;
  @Input("id") id:number;
  @Output("change") change = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

  HandleRedirect()
  {
    this.change.emit({id:this.id, type:this.type});
  }

}
