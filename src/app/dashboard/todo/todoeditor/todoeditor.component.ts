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
    this.pom = item.text;
    this.pomIndex= index
    this.niz[index].checked = true;
    this.publickChecked = true;
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    // });
  }

  close(index)
  {
    this.niz[index].checked = false;
    this.niz[index].text = this.pom;
    this.publickChecked = false;
  }

  handleEditTask()
  {
      this.niz[this.pomIndex] = this.updateItem;
      this.niz[this.pomIndex].checked = false;
      this.publickChecked = false
  }



  public flag :boolean = false; 
  public todoItemText :string = "";
  public niz = new Array();
  public habbitniz = ["8 glasses of water", "Workout 2h", "Get up in 5AM" ]
  public updateItem :any = "";
  public pomIndex :number
  public pom : any;
  public publickChecked:boolean = false;;
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
    this.niz.push({text:this.todoItemText,checked:false,habbit:false});
    this.todoItemText = "";
    this.flag = false;
  }

  handleHabbitToTodo(item,i)
  {
    this.niz.push({text:item,checked:false,habbit:true})
    this.habbitniz.splice(i,1)
  }


  handelDeleteTask(i)
  {
    if(this.niz[i].habbit===true)
    {
      this.habbitniz.push(this.niz[i].text)

    }
    this.niz.splice(i,1)
  }
   


  



  
}
