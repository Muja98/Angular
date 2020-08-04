import { Component, OnInit } from '@angular/core';
import { DiaryService } from './../../../service/diary.service';
import {AuthenticationService }from './../../../service/authentication.service';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-diaryeditor',
  templateUrl: './diaryeditor.component.html',
  styleUrls: ['./diaryeditor.component.css']
})
export class DiaryeditorComponent implements OnInit {

  constructor(private service: DiaryService, private aserice: AuthenticationService,private router:Router , private aroute:ActivatedRoute) { }

  private id:number
  public title:string="";
  public date:string="";
  public text:string="";
  public validationFlag: boolean = false;
  public editFlag: boolean = false;
  error={
    title:"",
    date:"",
    text:""
  }

  handleAddNewEntry()
  {
    if(this.title===""){this.error.title="Please fill the title input"}else{this.error.title=""}
    if(this.date===""){this.error.date="Please fill the date input"}else{this.error.date=""}
    if(this.text===""){this.error.text="Please fill the diary text input"}else{this.error.text=""}
    if(this.title===""||this.date===""||this.text===""){this.validationFlag=true}else{this.validationFlag=false}

    if(this.validationFlag===true){return;}
    else
    { 
     
        if(this.editFlag==true)
        {
          let diary={

            Date:this.date,
            Title:this.title,
            Text:this.text,
            userId: this.aserice.getUser().sub
          } 
          this.service.editDiary(diary,this.id)

        }
        else
        {
          let diary={
            Date:this.date,
            Title:this.title,
            Text:this.text,
            userId: this.aserice.getUser().sub
          } 
          this.service.AddnewDiary(diary)
        }
     
        this.router.navigate(['/dashboard/diary'])
    }
  }


  ngOnInit(): void {
    this.aroute.paramMap.subscribe(params=>{

    if(params.get('idDiary')===null){return}
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
