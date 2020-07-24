import { Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public width = "60px"
  public picture = "open"
  public flag = false;
  
  Povecaj()
  {
    this.picture="close"
    this.width="280px"
    this.flag = true;
  }

  Smanji()
  {
    this.picture = "open"
    this.width = "60px"
    this.flag = false;
  }
}