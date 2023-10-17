import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/Services/navbar.service';
import { Restaurant } from 'src/app/interfaces/Restaurant';

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
    facebook:'',
    email:'',
    location:'',
    menu:[],
    time:'',
    days:
      []
    ,
  }



  constructor(private route: ActivatedRoute, public nav: NavbarService) {
    this.route.queryParams.subscribe(params => {
     this.data = JSON.parse( params['data'])
      console.log(this.data);
      
    })
  }
  ngOnInit(){
    this.nav.show()
  }
  
}
