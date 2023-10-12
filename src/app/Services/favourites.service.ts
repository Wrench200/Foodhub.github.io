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

   
addtofav(val:any) {
  
    
    
  if (this.loggedin !== null) {
    const favour = this.loggedin.favorite
  
    if (this.loggedin.favorite === undefined) {
      
      
      this.loggedin.favorite = []
      this.loggedin.favorite.push(val)
      
    } else {
      this.loggedin.favorite.push(val)
      console.log(this.loggedin.favorite);
     const users: Array<user> = this.localstorage.getitem('users');
     for (let i = 0; i < users.length; i++) {
       let current_user = users[i];
       if (current_user.email == this.loggedin.email) {
       console.log('bad');
 
         users[i] = this.loggedin 
         console.log('dood');
         console.log(users);
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
