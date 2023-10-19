import { NavbarService } from 'src/app/Services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/Restaurant';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/Services/localstorage.service';
import { user } from 'src/app/interfaces/user';
import { FavouritesService } from 'src/app/Services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  ngOnInit() {
    this.nav.show()
    this.restaurants = this.getres()
    console.log(this.restaurants);
    
  }
  
  constructor(public nav: NavbarService, private router: Router, private localstorage: LocalstorageService, public favourites: FavouritesService) {

  }
  restaurants: Restaurant[] | null = null
  loggedin: user = this.localstorage.getitem('auth');
  openres(val: Restaurant) {
    const data = JSON.stringify(val)
    this.router.navigate(['/indi'], {
      queryParams: { data: data }
    })
  }
  getres() {
    
    const users: Array<user> = this.localstorage.getitem('users');
    for (let i = 0; i < users.length; i++) {
      let current_user = users[i];
      if (current_user.email == this.loggedin.email) {
        return current_user.favorite
      }
     
    }
    return null
  }
  
    remove(val: Restaurant): any {
      
      this.favourites.addtofav(val)
    this.redirectTo('favourites', 500)
  }
  redirectTo(uri: string, time: number) {
    this.router.navigate(['breadcrumbs'], { queryParams: { uri: uri, time } })
  }
  }

