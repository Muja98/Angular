import { TodoService } from './../../../service/todo.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private aservice:AuthenticationService, private service: TodoService) { }
  
  ngOnInit(): void {
    this.getAll();

  }

  numberOfTodos:number = 0;
  nubmerOfTodoItems:number = 0;
  numberOfFinishedItems:number=0;
  searchDate:string = "";
  itemsPerPage:number = 5;
  itemsCount:number = 0;
  page:number = 1;
  from = 0;
  to = this.itemsPerPage;
  pomniz = [];
  todoHabbit = [];
  todoItem = [];
  getAll()
  {
    this.service.getTodoById(this.aservice.getUser().sub).subscribe(
      (res:any)=>{
        this.niz = res;
        this.pomniz = this.niz;
        this.itemsCount = this.niz.length

        res.forEach(element => {
            this.service.getTodoItemsByTodoId(element.id).subscribe((el:any)=>{
                el.forEach(item => {
                    this.todoItem.push(item)
                });
            })
        });

        this.niz.forEach((el)=>{
            this.service.getHabbitFromTodoHabbit(el.id).subscribe((el:any)=>{
                el.forEach(element => {
                    this.todoHabbit.push(element)
                });
            })
            this.numberOfTodos++;
            this.nubmerOfTodoItems+=el.Items;
            this.numberOfFinishedItems +=el.Done;
        })
      }
    )

  
  }

  setValue(value)
  {
    console.log(this.todoItem)
    parseInt(value)
    if(value===0)
    {
      this.niz =[];
      this.niz = this.pomniz;
      return;
    }

    if(value==2)
    {
      this.niz.sort((a,b)=>Date.parse(b.Date) -Date.parse(a.Date))
      return
    }
    else if(value==1)
    {
      this.niz.sort((a,b)=>Date.parse(a.Date)-Date.parse(b.Date))
      return;
    }
    let br= 0;
   

    if(value == 5 || value==6){br=5}
    if(value == 3 || value==4){br=3}

    if(value ==1 || value ==3 || value ==5)
    {
        for(let i=0; i<this.niz.length-1;i++)
       {
        for(let j=0; j<this.niz.length-1-i; j++)
        {
          if(Object.values(this.niz[j])[br]>Object.values(this.niz[j+1])[br])
          {
            var pom = this.niz[j];
            this.niz[j] = this.niz[j+1];
            this.niz[j+1] = pom;
          }
        }
      }
    }
    else
    {
       //opadajuce 2,4,6
      for(let i=0; i<this.niz.length-1;i++)
      {
        for(let j=0; j<this.niz.length-1-i; j++)
        {
          if(Object.values(this.niz[j])[br]<Object.values(this.niz[j+1])[br])
          {
            var pom = this.niz[j];
            this.niz[j] = this.niz[j+1];
            this.niz[j+1] = pom;
          }
        }
      }
    }
  }

  handleDelete(id)
  {
    var nizTodo = this.todoItem.filter((x:any)=>x.todoId==id)
    var nizHabbit = this.todoHabbit.filter((x:any)=>x.todoId==id)
    
    nizTodo.forEach((el:any)=>{
      this.service.deleteTodoItem(el.id);
    })
    nizHabbit.forEach((el:any)=>{
      this.service.deleteTodoHabbit(el.id);
    })

    this.service.deleteTodo(id);
    window.location.reload();
  }

  handleSearch()
  {
    if(this.searchDate=="")
    {
      this.niz=[]
      this.getAll();
      return;
    }
    this.service.searchByDate(this.searchDate).subscribe(
      (res:any)=>{
        this.niz=[]
        this.niz = res;
      }
    )
  }

  handlePageNumber=(pageNumber)=>{
    
    if(!pageNumber || pageNumber===undefined || pageNumber === null) {
        this.from = 0;
        this.to = this.itemsPerPage;
    } else {
        if(pageNumber === Math.floor(this.itemsCount / this.itemsPerPage) + 1) {
          this.from = (pageNumber-1)*this.itemsPerPage;
          this.to = this.from+(this.itemsCount-this.from);
           

        } else {
          this.from = (pageNumber - 1) * this.itemsPerPage;
          this.to = this.from + this.itemsPerPage;
        }
    }
  }
 

  izracunaj(item,i)
  {
    if(item.Items==0){return 0}
    item.Estimate = Math.floor((item.Done/item.Items)*100)
    this.pomniz[i].Estimate = Math.floor((item.Done/item.Items)*100)
    return Math.floor((item.Done/item.Items)*100)
  }


  updateElement: any;
  niz = [];
  

  

    
     


}
