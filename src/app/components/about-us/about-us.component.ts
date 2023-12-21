import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Services/navbar.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
ngOnInit(): void {
  this.nav.show()
}
  constructor(public nav: NavbarService) {
    
  }
}
