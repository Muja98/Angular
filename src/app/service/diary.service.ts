import { Injectable } from '@angular/core';
import URL from '../../apis/api'
import {HttpClient} from '@angular/common/http';
import { computeMsgId } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})


export class DiaryService {

  constructor(private http:HttpClient){}

  
  getDiaryById(userId)
  {
      return this.http.get(URL+"/diary?userId="+userId);
  }

  getDiaryByIdDiary(Id)
  {
      return this.http.get(URL+"/diary/"+Id);
  }

  getDiaryByDate(date)
  {
      return this.http.get(URL+"/diary/?Date="+date);
  }

  AddnewDiary(newDiary)
  { 
      
      this.http.post(URL+'/diary', newDiary).subscribe( response=>{console.log(response)} )
  }


  editDiary(edited,id)
  {
      this.http.put(URL+'/diary/'+id,edited).subscribe(response=>{console.log(response)})
  }

  deleteDiary(id)
  {

      this.http.delete(URL+'/diary/'+id).subscribe(x=>{})
  }

  getLastDiary(id)
  {
      return this.http.get(URL+"/diary?_sort=id&_order=desc&_limit=1")
  }



}