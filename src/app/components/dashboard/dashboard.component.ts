import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Services/navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
    this.nav.show()
  }
  constructor(public nav: NavbarService) { }
}
