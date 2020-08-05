import { Component, OnInit } from '@angular/core';
import { DiaryService } from './../../../service/diary.service';
import {AuthenticationService }from './../../../service/authentication.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-diarydetail',
  templateUrl: './diarydetail.component.html',
  styleUrls: ['./diarydetail.component.css']
})
export class DiarydetailComponent implements OnInit {

  constructor(private service: DiaryService,private router:Router , private aroute:ActivatedRoute) { }

  public id:number
  public title:string="";
  public date:string="";
  public text:string="";
  public validationFlag: boolean = false;
  public editFlag: boolean = false;

  ngOnInit(): void {
    this.aroute.paramMap.subscribe(params=>{

    if(params.get('idDiary')===null){this.router.navigate(['/dashboard/diary'])}
    this.editFlag = true;
     this.service.getDiaryByIdDiary(parseInt(params.get('idDiary'))).subscribe(
       (x:any)=>{
         this.id = parseInt(x.id)
         this.text = x.Text
         this.title = x.Title
         this.date = x.Date
       }
     )
    })
  }

}
