import { Component } from '@angular/core';
import { NavbarService } from '../Services/navbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public nav: NavbarService) {
    
  }
}
