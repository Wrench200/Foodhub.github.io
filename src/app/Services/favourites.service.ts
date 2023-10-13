import { Favourites } from './../interfaces/favourites';
import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/Restaurant';
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private localstorage: LocalstorageService, private router: Router) { }

  loggedin: user = this.localstorage.getitem('auth');
  checkRestaurant(val: Restaurant, fav: Restaurant[]): any {
    
   const check = fav.findIndex(r => {
      if (r.name === val.name) {
        
        return true
        
        
      } 
        return false
      
      })
      if (check == -1) {
        fav.push(val)
        console.log('not found');
        
      } else {
        console.log('found and removed');
        
       fav.splice(check, 1)
      }
    return fav
    console.log(check);
    
  

;

    
      
    
   
  }

  addtofav(val: Restaurant) {



    if (this.loggedin !== null) {



      const users: Array<user> = this.localstorage.getitem('users');
      for (let i = 0; i < users.length; i++) {
        let current_user = users[i];
        if (current_user.email == this.loggedin.email) {
          if (current_user.favorite.length < 1) {
            current_user.favorite.push(val)
            console.log('empty');
            
            this.localstorage.removeitem('users')
            this.localstorage.saveitem('users', users)
            break
          } else {
            console.log('occupied');
            this.checkRestaurant(val, current_user.favorite)
            
            
            this.localstorage.removeitem('users')
            this.localstorage.saveitem('users', users)
            break
          }
        }
        
      }


    }


    else {
      console.log('bad');

      this.router.navigate(['/login']);

    }
  }
}
