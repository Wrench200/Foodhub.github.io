import { initFlowbite } from 'flowbite';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/Services/navbar.service';
import { Restaurant } from 'src/app/interfaces/Restaurant';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-individualrestaurant',
  templateUrl: './individualrestaurant.component.html',
  styleUrls: ['./individualrestaurant.component.scss']
})
export class IndividualrestaurantComponent implements OnInit {
  data: Restaurant = {
    name:'',
    type:'',
    region:[],
    profile:'',
    price:'',
    contact:'',
    
    
    location:'',
    menu:[],
    time:'',
    days:
      []
    ,
  }



  constructor(private route: ActivatedRoute, public nav: NavbarService, private elementRef: ElementRef, private renderer: Renderer2) {
    this.route.queryParams.subscribe(params => {
     this.data = JSON.parse( params['data'])
      console.log(this.data);
      
    })
  }
  ngOnInit() {
    initFlowbite()
    this.nav.show()
  }
  

 

 
}
