import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavbarService } from 'src/app/Services/navbar.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    
    initFlowbite
    this.nav.show()
    this.nav.doSomethingElseUseful()
    
    
  }
  constructor( public nav: NavbarService) { }
}
