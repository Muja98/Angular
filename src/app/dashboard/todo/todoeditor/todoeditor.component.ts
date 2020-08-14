import { element } from 'protractor';
import { TodoService } from './../../../service/todo.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './../../../service/authentication.service';
import { HabbitService } from './../../../service/habbit.service';

import {Router, ActivatedRoute} from '@angular/router'

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from '../../ngrx/actions/item.actions';
import * as fromItem from '../../ngrx/reducers/item.reducers';
import { Actions } from '@ngrx/effects';


@Component({
  selector: 'app-todoeditor',
  templateUrl: './todoeditor.component.html',
  styleUrls: ['./todoeditor.component.css']
})
export class TodoeditorComponent implements OnInit {

  items: Observable<any>

  title:string = "";
  date:string  = "";
  note:string = "";
  id:number;
  userId:string = ""
  validationFlag:boolean=  false;
  Estimate:number;
  Done:number;
  todoID:string = ""
  error = {
    title: "",
    date: "",
    note: "",
    task: ""
  }
  globalId = "";
  todoItemNiz = [];
  closeResult = '';
  editFlag:boolean = false;
  storeFlag:boolean=false;


  constructor(private store: Store<fromItem.State>,private modalService: NgbModal,private service:HabbitService,private aservice:AuthenticationService,private mService:TodoService, private router:Router , private aroute:ActivatedRoute) {
  }
  todoHabbitNiz = [];
  pomHabbitNiz = [];

  firstTimeLoaded = false;

  ngOnInit(): void {
    this.items = this.store.select(fromItem.selectAll)

    this.aroute.paramMap.subscribe(params=>{
      if(params.get('idTodo')!=='newtodo')
      {
        this.todoID = params.get('idTodo');
        this.editFlag = true;

        this.mService.getTodoByTodoId(params.get('idTodo')).subscribe((el:any)=>{
            this.title = el.Title;
            this.date = el.Date;
            this.note = el.Note;
            this.id = el.id;
            this.Estimate = el.Estimate;
            this.Done = el.Done;
        })

        this.mService.getTodoItemsByTodoId(params.get('idTodo')).subscribe((el:any)=>{
            this.todoItemNiz = el;
            el.forEach((element:any) => {
              this.niz.push({text:element.Title,checked:false,habbit:false,id:element.id,item:element});
            });
          
        })

        this.mService.getHabbitFromTodoHabbit(params.get('idTodo')).subscribe((el:any)=>{
                    this.todoHabbitNiz = el;            
                    el.forEach((element:any) => {
                        this.mService.getHabbitByTodo(element.habbitId).subscribe((ele:any)=>{
                        this.pomHabbitNiz.push(ele)
                        this.niz.push({text:ele.Title,checked:false,habbit:true,item:ele});
                    })
            });
        })
     }
     else
     {
      this.items.subscribe((el:any)=>{
        if(!this.storeFlag)
        {
          el.forEach(element => {
          this.niz.push({id:element.id,text:element.text,checked:false,habbit:false})
          this.globalId = element.id
          
          let pom2 = parseInt(this.globalId) +0;
          pom2++;
        
          this.globalId = pom2.toString();
         
        });
        this.storeFlag=true;
        }
        
      })
     }
    })

   

    
    this.sleep(200)
    this.service.getAllHabbitByUserId(this.aservice.getUser().sub).subscribe((res:any)=>{
        res.forEach((item:any) => {
          
          let flag=  false
          if(this.todoHabbitNiz.length>0)
          {
            this.todoHabbitNiz.forEach((el:any)=>{
              if(el.habbitId === item.id)
              {
                flag = true;
              }
            })
          }

          if(!flag)
          {
              if(item.Week.charAt(6)!=='1')
              {
                  if(item.EveryDayFlag || item.SpecificTimesFlag)
                  {
                    this.habbitniz.push(item);
                  }
                  if(item.SpecificDaysInWeekFlag)
                  {
                    if(this.checkSpecificDayInWeek(item))
                    {
                      this.habbitniz.push(item);
                    }
                  }
                  if(item.SpecificDaysInMonthFlag)
                  {
                    if(this.checkSpecificDaysInMonth(item))
                    {
                    this.habbitniz.push(item)
                    }
                  }
              }
            }
          });
    })

  }

  loguj()
  {
    this.items.subscribe(x=>{console.log(x)})
  }

  obrisiStore()
  {
    this.store.dispatch(new actions.DeleteAll())
  }

  checkSpecificDayInWeek(item)
  { 
    var d = new Date();
    var n = d.getDay();
    if(item.Day.charAt(n-1)==='1')
    {
      return true;
    } 
    return false;
  }

  checkSpecificDaysInMonth(item)
  {
    var d = new Date();
    var n = d.getDate();
    if(item.Day.charAt(n-1)==='1')
    {
      return true;
    } 
    return false
  }

  open(item,index) {

    if(item.id!==undefined)
    {
      this.updateItem = item;
      this.pom = item.text;
      this.pomIndex = index;
      this.niz[index].checked = true;
      this.publickChecked = true;
    
    }
    else
    {
      this.updateItem = item
      this.pom = item.text;
      this.pomIndex= index
      this.niz[index].checked = true;
      this.publickChecked = true;
    }
    this.pomForStore = item.text;

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

      var pom;
    this.items.subscribe((x:any)=>{

      x.forEach(element => {
    
          if(element.text===this.pomForStore){pom = element}
      });
    } )


      if(pom!==undefined && pom.id!==undefined)
      {
        this.store.dispatch(new actions.Update(pom.id, {text:this.niz[this.pomIndex].text}))
      }


  }

  

  public flag :boolean = false; 
  public todoItemText :string = "";
  public niz = new Array();
  public habbitniz = []
  public updateItem :any = "";
  public pomIndex :number
  public pom : any;
  public publickChecked:boolean = false;
  public pomForStore:string;

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
    if(this.globalId===""){this.globalId="1"}
    const item: fromItem.Item = {
      id:this.globalId,
      text: this.todoItemText,
      checked:false,
      habbit:false
    }
 
    let pom2 = parseInt(this.globalId) + 0;
    pom2++;
    this.globalId = pom2.toString();
    this.store.dispatch(new actions.Create(item ))
    
    this.niz.push({text:this.todoItemText,checked:false,habbit:false});
    this.todoItemText = "";
    this.flag = false;
  }

  handleHabbitToTodo(item,i)
  {

    this.niz.push({text:item.Title,checked:false,habbit:true, item:item, new:true})
    this.habbitniz.splice(i,1)
  }


  handelDeleteTask(i)
  {
    if(this.niz[i].habbit===true)
    {
      this.habbitniz.push(this.niz[i].item)
    }

    var pom;
    this.items.subscribe((x:any)=>{

      x.forEach(element => {
    
          if(element.text===this.niz[i].text){pom = element}
      });
     } )
    if(pom!==undefined && pom.id!==undefined)
    {
      this.store.dispatch(new actions.Delete(pom.id ))
    }
  

    this.niz.splice(i,1)
  }

  checkIfIsDone()
  {
    let br = 0;
    this.niz.forEach((el:any)=>{
        if(el.habbit)
        {
          if(el.item.Week.charAt(6)==='1'){br++}
        }
        else{
          if(el.item!==undefined)
          {
            if(el.item.Status){br++}
          }
        }
    })
    return br;
  }

  sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }
   

  HandleAddNewTodo()
  {
    this.flag = false;
    if(this.title===""){this.error.title="Please fill the title input"}else{this.error.title=""}
    if(this.date===""){this.error.date="Please fill the date input"}else{this.error.date=""}
    if(this.title===""||this.date===""){this.validationFlag=true}else{this.validationFlag=false}

    if(this.validationFlag===true){return;}

    let todo = {
      Title:this.title,
      Date:this.date,
      Note:this.note,
      Estimate:0,
      Done:0,
      Items:this.niz.length,
      userId: this.aservice.getUser().sub
    }
   

    if(this.editFlag)//UPDATE
    {
 
      this.niz.forEach((el:any)=>{
            if(!el.habbit)
            {
                if(el.id!==undefined)
                {
                  let todoItem={
                    Title:el.text,
                    Status:false,
                    todoId:this.todoID
                  }
                  this.mService.updateTodoItem(el.id,todoItem)
                }
                else
                {
                  let todoItem={
                    Title:el.text,
                    Status:false,
                    todoId:this.todoID
                  }
                    this.mService.AddnewTodoItem(todoItem)
                }
            }
            else
            {
                
                let flg = false;
                this.todoHabbitNiz.forEach((item:any)=>{
                    if(item.todoId===this.todoID.toString()&&el.item.id===item.habbitId)
                    {
                      flg = true;
                    }
                })
                if(!flg)
                {
                  let todohabbit={
                    todoId:this.todoID,
  
                    habbitId:el.item.id
                  }
          
                  this.mService.Addnewtodohabbit(todohabbit)
                }
             
            }
        })

      this.todoHabbitNiz.forEach((el:any)=>{//Ako ne postoji u listi a ima ga u bazi brisemo
          if(el.todoId==this.todoID)
          { 
            let flag = false;
            this.niz.forEach((elementNiz:any)=>{
              if(elementNiz.habbit && elementNiz.item.id==el.habbitId)
              {
                flag = true;
              }
            })
            if(!flag)
            {
               this.mService.deleteTodoHabbit(el.id)
            }
          }
        
      })

      this.todoItemNiz.forEach((el:any)=>{
          let flag = false;
          this.niz.forEach((elementNiz:any)=>{
              if(elementNiz.id!==undefined)
              {
                if(el.id==elementNiz.id)
                {
                  flag = true;
                }
              }
          })
          if(!flag)
          {
            this.mService.deleteTodoItem(el.id)
          }
      })

      
      todo.Items = this.niz.length
      todo.Done = this.checkIfIsDone();
      this.mService.updateTodo(this.id,todo);
    }

    else//NEW
    {
      this.mService.addNewTodo(todo).subscribe( (res:any)=>{
        console.log(res)
        this.niz.forEach((item:any)=>{
          this.sleep(200)
          if(item.habbit)
          {
            let todohabbit={
                todoId:res.id,
                habbitId:item.item.id
            }
            this.mService.Addnewtodohabbit(todohabbit)
          }
          else
          {

            let todoItem={
              Title:item.text,
              Status:false,
              todoId:res.id,
            }
            this.mService.AddnewTodoItem(todoItem)
          }
        })
      })
    }
    this.store.dispatch(new actions.DeleteAll())
    this.router.navigate(['/dashboard/todo'])
  }

}
