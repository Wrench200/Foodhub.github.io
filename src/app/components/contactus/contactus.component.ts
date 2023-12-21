import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Services/navbar.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  constructor(public nav: NavbarService) {
  
  }
  ngOnInit(): void {
    this.nav.show()
  }
  
}
