import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { LocalstorageService } from './../Services/localstorage.service';
import { Component, HostListener, OnInit } from "@angular/core";
import { initFlowbite } from 'flowbite';
import { NavbarService } from '../Services/navbar.service';
import { InitialsPipe } from '../Pipes/initials.pipe';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],

})
export class NavComponent implements OnInit {
  
  constructor(private Localstorage: LocalstorageService, private router: Router, public nav: NavbarService) {
   
    
   }
  ngOnInit(): void {

    initFlowbite()

    
  }
  
  loggedin: any = this.Localstorage.getitem('auth')
  @HostListener('window:scroll', ['$event'])
  scroll() {
    let a = window.scrollY;
    let b = 30;
    if (a >= b) {
      return true

    } else {
      return false

    }
  }


  checkforlogin() {
    if (localStorage.getItem('auth')) {
      return true
    } else {
      return false
    }
  }

  logout() {
    this.Localstorage.removeitem('auth');
    this.redirectTo('login')
  }
  redirectTo(uri: string) {
    this.router.navigate(['breadcrumbs'], { queryParams: { uri: uri } })
  }
}
