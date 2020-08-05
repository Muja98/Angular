import { Injectable } from '@angular/core';
import URL from '../../apis/api'
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class HabbitService {

  constructor(private http:HttpClient){}

  AddnewHabbit(newHabbit)
  { 
      this.http.post(URL+'/habbit', newHabbit).subscribe( response=>{} )
  }

  getAllHabbitByUserId(id)
  {
        return this.http.get(URL+"/habbit?userId="+id)
  }

  getHabbitByHabbitId(Id)
  {
    return this.http.get(URL+"/habbit/"+Id);
  } 

  editHabbit(id,habbit)
  {
    this.http.put(URL+'/habbit/'+id,habbit).subscribe()
  }

  getAllNotesById(id)
  {
    return this.http.get(URL+"/note?HabbitId="+id)
  }

  addNewComment(comment)
  {
    this.http.post(URL+'/note/',comment).subscribe()
  }

  getHabbitByDate(date)
  {
    return this.http.get(URL+'/habbit?Date='+date)
  }

}