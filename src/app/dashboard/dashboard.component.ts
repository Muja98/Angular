import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  pomWidth
  pomwidth2
  onResized2(event: ResizedEvent)
  {
    this.pomwidth2 = event.newWidth;
   
  }
  onResized(event: ResizedEvent) {
    if(event.newWidth<=920)
    {
      this.mobile = false;
    }
    else
    {
      this.mobile = true;
    }
  }

  ngonchanfe
  mobile = true;
  public width = "280px"
  public picture = "open"
  public flag = true;
  
  public height = document.body.scrollHeight+"px";
  Povecaj()
  {
    this.picture="close"
    this.width="280px"
    this.flag = true;
  }

  Smanji()
  {
    this.picture = "open"
    this.width = "65px"
    this.flag = false;
  }
  
  base64textString = [];

onUploadChange(evt: any) {
  const file = evt.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
  }
}

handleReaderLoaded(e) {
  this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
}

}