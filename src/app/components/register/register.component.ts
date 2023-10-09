import { Component, OnInit } from '@angular/core';
import { Input,Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {
  ngOnInit() {
    initTE(Input);
  }
 

}
