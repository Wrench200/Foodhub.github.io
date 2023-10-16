import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/Services/localstorage.service';
import { NavbarService } from 'src/app/Services/navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private localstorage: LocalstorageService, public nav: NavbarService) {
    
  }
  ngOnInit() {
   this.nav.show()
  }
  loggedin: any = this.localstorage.getitem('auth')
}
