import { LocalstorageService } from './../Services/localstorage.service';
import { Component, HostListener } from "@angular/core";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  
})
export class NavComponent {
  
  constructor( private Localstorage: LocalstorageService){}
  
  @HostListener('window:scroll', ['$event'])
  scroll() {
    let a = window.scrollY;
    let b = 50;
    if (a >= b) {
      return true

    } else {
      return false

    }
  }


  checkforlogin() {
    if (localStorage.getItem('loggedin')) {
      return true
    } else {
      return false
    }
  }

}
