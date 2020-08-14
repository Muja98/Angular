import { Component,ViewChild  } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import {Router} from '@angular/router'
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent  {
  constructor(public service: AuthenticationService,private router:Router) {}
  
  public sideBar:boolean = false;

  images = [1,2,3].map((n) => `/assets/${n}.jpg`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  
  logIn()
  {
    this.router.navigate(['/login'])
  }
  logOut()
  {
    this.service.logout();
  }

  niz1 = ['Make your plan','Make new habbits','Write a diary']
  niz2 = ['Manage your day with todo list.','Create new habbit with tracking it every day.','Write a diary and share taugts with others.']

   w3_open() {
     this.sideBar = true;
    document.getElementById("mySidebar").style.display = "block";
  }
  
   w3_close() {
     this.sideBar=false;
    document.getElementById("mySidebar").style.display = "none";
  }
}
