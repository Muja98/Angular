import { Injectable } from '@angular/core';
import URL from '../../apis/api'
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class TodoService {

  constructor(private http:HttpClient){}

  addNewTodo(todo)
  {
    return this.http.post(URL+'/todo', todo)
  }

  AddnewTodoItem(todoItem)
  { 
      this.http.post(URL+'/todoitem', todoItem).subscribe();
  }

  Addnewtodohabbit(todoHabbit)
  { 
      this.http.post(URL+'/todohabbit', todoHabbit).subscribe();
  }

  getTodoById(Id)
  {
    return this.http.get(URL+"/todo/?userId="+Id);
  }

  getTodoByTodoId(todoId)
  {
      return this.http.get(URL+"/todo/"+todoId);
  }

  getTodoItemsByTodoId(Id)
  {
    return this.http.get(URL+"/todoitem?todoId="+Id);
  }

  getHabbitFromTodoHabbit(todoId)   
  {
    return this.http.get(URL+"/todohabbit?todoId="+todoId);   
  }

  getHabbitByTodo(id)
  {
      return this.http.get(URL+"/habbit/"+id)
  }

  updateTodo(id,todo)
  {

    this.http.put(URL+"/todo/"+id,todo).subscribe((el:any)=>{})
  }

  updateTodoItem(id, todoitem)
  {
      this.http.put(URL+"/todoitem/"+id,todoitem).subscribe((el:any)=>{})
  }

  getTodoHabbitAndDelete(idTodo,idHabbit)
  {
      return this.http.get(URL+"/todohabbit?todoId="+idTodo+"&habbitId="+idHabbit)
  }
  
  updateTodoItemStatus(id, status)
  {
    this.http.patch(URL+'/todoitem/'+id,status).subscribe(x=>{console.log(x)})
  }

  updateHabbitStatus(id, week)
  {
    this.http.patch(URL+'/habbit/'+id,week).subscribe(x=>{console.log(x)})
  }

  updateNote(id, note)
  {
    this.http.patch(URL+'/todo/'+id,note).subscribe(x=>{console.log(x)})
  }

  searchByDate(date)
  {
    return this.http.get(URL+"/todo?Date="+date);
  }

  deleteTodo(id)
  {
    this.http.delete(URL+'/todo/'+id).subscribe((el:any)=>{console.log(el)})
  }

  deleteTodoItem(id)
  {
    this.http.delete(URL+'/todoitem/'+id).subscribe((el:any)=>{console.log(el)})
  }

  deleteTodoHabbit(id)
  {
    this.http.delete(URL+"/todohabbit/"+id).subscribe((el:any)=>{console.log(el)})
  }
   
  getLastTodo(id)
  {
    return this.http.get(URL+"/todo?userId="+id+"&_sort=id&_order=desc&_limit=1")
  }
}