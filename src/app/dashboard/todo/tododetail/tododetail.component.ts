import { Router,ActivatedRoute } from '@angular/router';
import { TodoService } from './../../../service/todo.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../service/authentication.service';
import { HabbitService } from './../../../service/habbit.service';
export interface ConfirmModel {
  items:any
}
@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {

  title:string  ="";
  date:string = "";
  tasks:string = "";
  pom: boolean  =false;
  note: string = "";
  pomNote:string = "";
  activateFlag:boolean = false;
  todoID:string;
  done:number = 0;
  constructor(private service:HabbitService,private aservice:AuthenticationService,private mService:TodoService, private router:Router , private aroute:ActivatedRoute) { }
  ngOnInit(): void {
    this.aroute.paramMap.subscribe(params=>{
      if(params.get('idTodo')!=='newtodo')
      {
        this.todoID = params.get('idTodo');
        this.mService.getTodoByTodoId(this.todoID).subscribe((item:any)=>{
          this.title = item.Title;
          this.date = item.Date;
          this.tasks  = item.Items
          this.note = item.Note;
        })

        this.mService.getTodoItemsByTodoId(this.todoID).subscribe((item:any)=>{
          this.taskNiz = item;

          this.taskNiz.forEach((el:any)=>{
            if(el.Status){this.done++}
          })
        })

       

        this.mService.getHabbitFromTodoHabbit(params.get('idTodo')).subscribe((el:any)=>{
          el.forEach((element:any) => {
              this.mService.getHabbitByTodo(element.habbitId).subscribe((ele:any)=>{
              let checked = false
              if(ele.Week.charAt(6)==='1'){checked=true;this.done++}
              else{checked=false}
              this.habbitNiz.push({item:ele,checked:checked});
          })
         });
         })

      }})
  }

  
  HandleChangeNote()
  {
    this.pomNote = this.note;
    this.activateFlag = true;
  }

  handleSaveClick()
  {

    this.taskNiz.forEach((el:any)=>{
      this.mService.updateTodoItemStatus(el.id,{Status:el.Status})
    })

    this.habbitNiz.forEach((el:any)=>{
      this.mService.updateHabbitStatus(el.item.id,{Week:el.item.Week})
    })

    this.mService.updateNote(this.todoID, {Note: this.note, Done:this.done})
    this.Exit();
  }

 
  taskNiz = []
  habbitNiz = []
  items: any;

  Exit()
  {
    this.router.navigate(['dashboard/todo'])
  }

  click(item)
  {
    item.Status = !item.Status
    if(item.Status)
    {
      this.done++;
    }
    else
    {
      this.done--;
    }
  }

  clickHabbit(item)
  {
      let pom ="";
      for(let i=0; i<6; i++)
      {
        pom = pom.concat(item.item.Week.charAt(i))
      }

      if(item.item.Week.charAt(6)=='1')
      {
        pom = pom.concat('0')
        this.done--;
      }
      else
      {
        pom = pom.concat('1')
        this.done++;
      }
      item.item.Week = pom;
  }






 

}
