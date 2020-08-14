import { DiaryService } from './../../../service/diary.service';
import {AuthenticationService }from './../../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';
import {User} from '../../ngrx/model/user.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../ngrx/app.state'

@Component({
  selector: 'app-diarylist',
  templateUrl: './diarylist.component.html',
  styleUrls: ['./diarylist.component.css']
})
export class DiarylistComponent implements OnInit {

  constructor(private store: Store<AppState>,private service: DiaryService, private aserice: AuthenticationService,private router:Router) { }
  niz: any =  []
  pomniz: any = []
  user : any;
  user1: Observable<User>;
  dateSearch: string = "";
  itemsPerPage:number = 5;
  itemsCount:number = 0;
  page:number = 1;
  from = 0;
  to = this.itemsPerPage;
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll()
  {
    this.user1 = this.store.select('user');
    this.user1.subscribe(data=>this.user = data)
    this.service.getDiaryById(this.aserice.getUser().sub).subscribe(
        response =>{this.niz = response
                    this.itemsCount = this.niz.length}
    )
  }

  handleSearch()
  {
    if(this.dateSearch=="")
    {
      this.getAll();
    }

    this.service.getDiaryByDate(this.dateSearch).subscribe(
      response=>{
        this.niz = [];
        this.niz = response;
      }
    )

  }

  setValue(value)
  {
    console.log(this.niz)
    if(value==2)
    {
      this.niz.sort((a,b)=>Date.parse(b.Date) -Date.parse(a.Date))
    }
    else
    {
      this.niz.sort((a,b)=>Date.parse(a.Date)-Date.parse(b.Date))
    }
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

  handleDelete(id)
  {

    this.service.deleteDiary(id);
    window.location.reload();
  }

  handleEditDiary(id)
  {
    this.router.navigate(["dashboard/diary/"+id])
  }
}
