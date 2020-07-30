import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-todoeditor',
  templateUrl: './todoeditor.component.html',
  styleUrls: ['./todoeditor.component.css']
})
export class TodoeditorComponent {

  closeResult = '';

  constructor(private modalService: NgbModal) {}



  open(content,item,index) {
    this.updateItem = item
    this.pomIndex= index
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }

  handleEditTask()
  {
      this.niz[this.pomIndex] = this.updateItem;
  }



  public flag :boolean = false; 
  public todoItemText :string = "";
  public niz = new Array();
  public habbitniz = ["8 glasses of water", "Workout 2h", "Get up in 5AM" ]
  public updateItem :string = "";
  public pomIndex :number
  handleCancel()
  {
    this.flag = false;
  }

  handleOpenAddTask()
  {
    this.todoItemText = "";
    this.flag = true;
  }
  
  handleAddTask()
  {
    this.niz.push(this.todoItemText);
    this.todoItemText = "";
    this.flag = false;
  }

  handleHabbitToTodo(item)
  {
    this.niz.push(item)
  }


  handelDeleteTask(i)
  {
    this.niz.splice(i,1)
    console.log(this.niz)
  }
   


  



  
}
