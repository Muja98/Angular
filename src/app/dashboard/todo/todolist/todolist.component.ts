import { TododetailComponent } from './../tododetail/tododetail.component';
import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from "ngx-simple-modal";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private simpleModalService:SimpleModalService) { }
  
  showConfirm(item) {
  
    let disposable = this.simpleModalService.addModal(TododetailComponent, {
          items:item
        })
        .subscribe((isConfirmed)=>{
            if(isConfirmed) {
               
            }
            else {
              
            }
        });
    //We can close modal calling disposable.unsubscribe();
    //If modal was not closed manually close it by timeout
    
}

  updateElement: any;
  niz = [
    {
      'id': 1,
          'title': 'WeekTodo',
          'comment': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
          'date': '2020-05-10',
          'estimate': 34,
          'userId': 1,
    },
    {
      'id': 2,
          'title': 'MonthDodo',
          'comment': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, tortor et fermentum molestie, eros massa congue lacus, vel malesuada tellus lacus eu quam. Pellentesque enim velit, dictum a vestibulum eu, dapibus at leo. Ut vitae mauris lobortis, porttitor augue non, suscipit leo. Ut at pulvinar lorem. Donec nibh dolor, ultricies sit amet sagittis eget, viverra vitae libero. Aenean malesuada efficitur ex vitae tristique. Suspendisse volutpat eu risus in tincidu",
          'date': '2020-06-09 ',
          'estimate': 54,
          'userId': 1,
    },
    {
      'id': 3,
          'title': 'Vukanja todo\'s',
          'comment': "neki",
          'date': '2020-06-09 ',
          'estimate': 23,
          'userId': 1,
    },
    {
      'id': 4,
          'title': 'Kursumlija todo\'s',
          'comment': "neki",
          'date': '2020-06-09 ',
          'estimate': 87,
          'userId': 1,
    },
    {
      'id': 4,
          'title': 'Kursumlija todo\'s',
          'comment': "neki",
          'date': '2020-06-09 ',
          'estimate': 87,
          'userId': 1,
    },
    {
      'id': 4,
          'title': 'Kursumlija todo\'s',
          'comment': "neki",
          'date': '2020-06-09 ',
          'estimate': 87,
          'userId': 1,
    },

  ];
  

  

  ngOnInit(): void {
    
     
  }

}
