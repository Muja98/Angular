import { Router } from '@angular/router';
import { Component} from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";

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
  constructor(private router: Router) {
    super();
    
  }

  niz = [{title:"Get up in 5am in the morning",checked:false},
         {title:"Run for 30 minutes",checked:false},
         {title:"Cold Shower",checked:false},
         {title:"Meditate for 15 minutes, meditaion for school",checked:false},
         {title:"Watch Shogun for 1h",checked:false},
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
