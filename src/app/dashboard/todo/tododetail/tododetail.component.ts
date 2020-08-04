import { Router } from '@angular/router';
import { Component} from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
import { not } from '@angular/compiler/src/output/output_ast';

export interface ConfirmModel {
  items:any
}
@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {

  pom: boolean  =false;
  note: string = "";
  pomNote:string = "";
  activateFlag:boolean = false;

  constructor(private router: Router) {
    super();
    
  }

  HandleChangeNote()
  {
    this.pomNote = this.note;
    this.activateFlag = true;
  }

  handleSaveClick()
  {
    this.pomNote = this.note;
    this.activateFlag = false;
  }

  handleAbortClick()
  {
   
    this.note = this.pomNote;
    this.activateFlag = false;
  }

  niz = [{title:"Get up in 5am in the morning",checked:false},
         {title:"Run for 30 minutes",checked:false},
         {title:"Cold Shower",checked:false},
         {title:"Meditate for 15 minutes, meditaion for school",checked:false},
         {title:"Study 4h",checked:false},
         {title:"Sleep 1h",checked:false},
         {title:"Study 4h",checked:false},
         {title:"Workout",checked:false},
         {title:"Sleep at 21h",checked:false},
        ]
  items: any;
  confirm() {
   
    this.result = true;
    this.close();
  }

  Exit()
  {
    this.router.navigate(['dashboard/todo'])
  }

  click(item)
  {
    console.log(item)
    item.checked = !item.checked
    // this.pom = !this.pom
    // console.log(index)
  }

 

}
