import { FavouritesService } from './../../Services/favourites.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LocalstorageService } from 'src/app/Services/localstorage.service';
import { NavbarService } from 'src/app/Services/navbar.service';
import { Restaurant } from 'src/app/interfaces/Restaurant';
import { user } from 'src/app/interfaces/user';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  showPopup: boolean = false;
  
  
  addtofav(restaurant: any) {
   this.favouritesservice.addtofav(restaurant)
  }
  openres(val: Restaurant) {
    const data = JSON.stringify(val)
    this.router.navigate(['/indi'], {
      queryParams:{ data: data}
    })
  }
  ngOnInit() {
    this.nav.show()
  initFlowbite
    this.restaurants.sort(this.sortByName)
  }
  constructor(public nav: NavbarService, private localstorage: LocalstorageService, private router : Router , private favouritesservice: FavouritesService) {
    
  }
  sortByName(a:any, b:any ):any {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase

    // sort in an ascending order
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  }
  loggedin: user = this.localstorage.getitem('auth');
  checkres(val: Restaurant) {

    const users: Array<user> = this.localstorage.getitem('users');
    let bo: boolean = false
    for (let i = 0; i < users.length; i++) {
      let current_user = users[i];
      if (current_user.email == this.loggedin.email) {
        const check = current_user.favorite.includes(val)
        if (check) {
          console.log('good');
          bo = true
        }
        console.log('trash');
        bo = false
      }

    }
    return bo
  }


  restaurants: Restaurant[] = [
  {
    name: "The Matanda Mangroves",
    type: "local",
    region: ["African", "European", "Cameroonian"],
    profile: "https://kathalog.net/admin/images/dc581b12ce39fd60d5eb9517e890ce7b.jpeg",
    price: "5000FCFA",
    contact: "6 98 21 12 0",
    facebook: "https://www.facebook.com/lespaletuviersmatanda/",
    email: "paletuviersmatanda@gmail.com",
    location: "Bonassama, Bonaberi, Douala",
    menu: [
      "https://kathalog.net/admin/images/d1fbd019d9c87b478f5fe4cf10b0deff.jpeg",
      "https://kathalog.net/admin/images/71fd5b9ccea653126671b2ee509e7802.jpeg",
      "https://kathalog.net/admin/images/71fd5b9ccea653126671b2ee509e7802.jpeg",
      "https://kathalog.net/admin/images/71fd5b9ccea653126671b2ee509e7802.jpeg",
    ],
    time: "14h-23h",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "The Blue Whale of Massa ",
    region: ["African", "European", "French", "Cocktails"],
    type: "local",
    profile: "https://kathalog.net/admin/images/1501195374IMG_6357.JPG",
    price: "5000FCFA",
    contact: "6 94 37 14 60",
    email: "labaleinebluedemassa@gmail.com",
    location:
      " Bonanjo, Douala",
    menu: [
      "https://kathalog.net/admin/images/8643757322.jpg",
      "https://kathalog.net/admin/images/9776249783.jpg",
      "https://kathalog.net/admin/images/343477114.jpg",
      "https://kathalog.net/admin/images/17011136815.jpg",
      "https://kathalog.net/admin/images/20808801026.jpg",
     
    ],
    time: "06h-00h",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },

  {
    name: "Les Peroquets",
    type: "local",
    region: ["African", "European"],
    profile: "https://kathalog.net/admin/images/784be943fc41f9ae7501c4c8e235cac5.JPG",
    price: "6000FCFA",
    contact: "6 51 65 14 81",
    email: "les2perroquets@gmail.com",
    location: "  Rue Ngosso Din, Bali , Douala",
    menu: [
      "https://kathalog.net/admin/images/880d83ce8d1e8db83bd39fad593dc3e3.jpeg",
      "https://kathalog.net/admin/images/b5f05a55d65aa9f3892783c5986c851b.jpeg",
      "https://kathalog.net/admin/images/456d78ab73da657cc3f5cac10ef7bc7b.jpeg",
      "https://kathalog.net/admin/images/9cfd8108bcb20d3523e474d29d3e7dc6.jpeg",
      "https://kathalog.net/admin/images/d45228639af2253d72bf16d034d853d3.jpeg",
      "https://kathalog.net/admin/images/5c6de4db8e5668aba3399a264c0d0b39.jpeg",
      "https://kathalog.net/admin/images/c54c9f762471d7d0266203f1cc328778.jpeg",
      "https://kathalog.net/admin/images/1fb5e740e1594a300dfb63605a45dc02.jpeg",
      "https://kathalog.net/admin/images/e81a1ba0873cebe0d9652384948d943a.jpeg",
      "https://kathalog.net/admin/images/6a3a06c356720a50702fe2514842706b.jpeg",
      "https://kathalog.net/admin/images/09c2d9cbbf4fda8859da3644cfcffad8.jpeg",
      "https://kathalog.net/admin/images/afc7839dbe1259f2ba51d9ec0231c005.jpeg",
     
    ],
    time: "12h-23h",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },

  {
    name: "La Pirogue",
    type: "local",
    region: ["African", "European"],
    profile: "https://kathalog.net/admin/images/8998f59b7b8c8e3d439a333ddf7613dd.jpg",
    price: "3500FCFA",
    contact: "6 96 60 27 07",
    facebook: "https://m.facebook.com/Restaurant-la-Pirogue-1628976614001675/ ",
    location: "Carrefour Deido plage, Douala",
    menu: [
      "https://kathalog.net/admin/images/fd91825cda340d5179a81830bf9b7a54.jpg",
      "https://kathalog.net/admin/images/ab3cf0b243fbc0596cb27aca1f4a7f5f.jpg",
      "https://kathalog.net/admin/images/f52d92a8d13181f2146fbd33126a9e2f.jpg",
      "https://kathalog.net/admin/images/e793b5335e6e1854f54c3e923ebf6737.jpg",
      "https://kathalog.net/admin/images/3b260c447757d3c367fffe23e78a44f2.jpg",
      "https://kathalog.net/admin/images/c4192a64013e6c88cb6cf8fb174be449.jpg",
      "https://kathalog.net/admin/images/f0b5569a27214249af63e60428bc73bd.jpg",
      "https://kathalog.net/admin/images/3900FCFA39880693bb8c08b1e7abae6fcc3.jpg",
    ],
    time: "07h-23h",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ]
  },

  {
    name: "Oasis Cave",
    type: "diner",
    region: ["African", "European", "Cocktail"],
    profile: "https://kathalog.net/admin/images/b27970cdf6588d41a60ed7c1117c8b1b.jpeg",
    price: "4000FCFA",
    contact: "6 91 28 49 85",
    location: "Base Navale  Bonanjo Douala",
    menu: [
      "https://kathalog.net/admin/images/09e4e7d107e801a8587e3a4ffa174304.jpeg",
      "https://kathalog.net/admin/images/40965cd45a2869374e4cd7468526846c.jpeg",
      "https://kathalog.net/admin/images/3d378a467c956afeccc8b27bede57a91.jpeg",
    ],
    time: "10h-00h",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "Clavio",
    type: "dinner",
    region: ["Lounge", "Bar", "Grillades", "Rooftop"],
    profile: "https://kathalog.net/admin/images/49397cf6f33e96a8478d9a940be37c57.jpeg",
    price: "5000FCFA",
    contact: "6 98 26 89 14",
    facebook: "https://facebook.com/clavioakwaofficiel",
    location: "Base Navale Bonanjo Douala",
    menu: [
      "https://kathalog.net/admin/images/d7744c75d035d0780524c6abf7127b75.jpeg",
      "https://kathalog.net/admin/images/c5853c6b884647a53d2518f3f4a62837.jpeg",
      "https://kathalog.net/admin/images/91734e8a52c54c525c5287b1b9a0328d.jpeg",
      "https://kathalog.net/admin/images/6bc37539083556899f7fd47e0b877631.jpeg",
      "https://kathalog.net/admin/images/130b9b33746d612c444f014b776bd6ed.jpeg"
    ],
    time: "10h-00h",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  
 

  {
    name: "Fun Center",
    type: "lunch",
    region: ["Pizza", "Cocktails"],
    profile: "https://kathalog.net/admin/images/df62ab41879e972e5a879e14d15e1e07.jpeg",
    price: "5000FCFA",
    contact: "+ 237 6 56 55 56 55",
    facebook: "www.facebook.com/funcenter237",
    location: "  Bonapriso , Douala",
    menu: ["https://kathalog.net/admin/images/1f7cb2660611c891fae4960e12fc578a.jpeg", "https://kathalog.net/admin/images/8946f1ee45bbdfe602ba7f53b0ed2272.jpeg"],
    time:  "09h-23h",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "Be Bop",
    type: "breakfast",
    region: ["Bar", "Cocktails"],
    profile: "https://kathalog.net/admin/images/1419303242IMG_5757.JPG",
    price: "5000FCFA",
    contact: "696734852",
    email: "africa_bio@yahoo.fr",
    location: " Bonapriso , Douala",
    menu: [
      "https://kathalog.net/admin/images/1997557488IMG_5511.JPG",
      "https://kathalog.net/admin/images/1292042739IMG_5512.JPG",
      "https://kathalog.net/admin/images/268185734IMG_5514.JPG",
      "https://kathalog.net/admin/images/1193510589IMG_5515.JPG",
      "https://kathalog.net/admin/images/439042224IMG_5516.JPG",
      "https://kathalog.net/admin/images/687787298IMG_5517.JPG"
    ],
    time: "07h-00h",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  
  {
    name: "Lynk Garden",
    type: "breakfast",
    region: ["Cafe", "Bar"],
    profile: "https://kathalog.net/admin/images/2123095486IMG_5794.JPG",
    price: "8000FCFA",
    contact: "696 001 832",
    email: "lynkafrique@gmail.com",
    location: "Bonapriso, Douala",
    menu: [
      "https://kathalog.net/admin/images/2084217578IMG_5544.JPG",
      "https://kathalog.net/admin/images/1967842899IMG_5545.JPG",
      "https://kathalog.net/admin/images/1836107215IMG_5547.JPG",
      "https://kathalog.net/admin/images/2071833804IMG_5548.JPG",
      "https://kathalog.net/admin/images/983691399IMG_5549.JPG",
      "https://kathalog.net/admin/images/624085279IMG_5552.JPG",
      "https://kathalog.net/admin/images/1792375768IMG_5553.JPG",
      "https://kathalog.net/admin/images/1225057256IMG_5554.JPG",
     
    ],
    time: "12h-20h",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  {
    name: "Terrific Coffee",
    type: "breakfast",
    region: ["Lounge", "Cafe"],
    profile: "https://kathalog.net/admin/images/891085a333fc31d5497884b544a22c98.jpeg",
    price: "1000FCFA",
    contact: "6 79 70 10 13",
    facebook: "https://m.facebook.com/Terrificcoffee2018/",
    email: "support@terrificcoffeecm.com",
    location: " hôtel Serena, Bonamoussadi",
    menu: [
      "https://kathalog.net/admin/images/5cc346d959c40c7cbd45d9bc5e77cee5.jpeg",
      "https://kathalog.net/admin/images/bd2edf614d728a25ccd7ab68eb03c284.jpeg",
      "https://kathalog.net/admin/images/9c876d9549ec443163126f534717d468.jpeg",
      "https://kathalog.net/admin/images/4bdcecb77518d68e4c7e36b2ca0aca4e.jpeg",
      
    ],
    time:  "08h-23h",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },

 
  {
    name: "Nice Cream",
    type: "dessert",
    region: ["Glace", "Crepes", "Pizza"],
    profile: "https://kathalog.net/admin/images/3e76847321d184133fdc54383e38c08c.jpeg",
    price: "1500FCFA",
    contact: "690 03 03 44",
    email: "doualanicecream@gmail.com",
    location: "  Akwa, Douala",
    menu: [
      "https://kathalog.net/admin/images/b77e20204ff2fec98ba1cbed43575b04.jpeg",
      "https://kathalog.net/admin/images/0FCFAca9b438accb9226be51fc404f9c724.jpeg",
      "https://kathalog.net/admin/images/832d756b0FCFA265e4a5e0194c2ef6c3e7e.jpeg",
      "https://kathalog.net/admin/images/750d5e961a9181b8feb8491f905077fb.jpeg",
    ],
    time: "11h-23h",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    name: "Yogo’o",
    type: "dessert",
    region: ["Glacier", "Creperie"],
    profile: "https://kathalog.net/admin/images/8ca88d4abaa706363885574284845f43.JPG",
    price: "2500FCFA",
    contact: "6 50 00 17 47 ",
    facebook:"https://www.facebook.com/yogoocameroun/",
    location: " Bonapriso, Douala",
    menu: [
      "https://kathalog.net/admin/images/3d342b8d1194c445b29d699d9b326806.jpeg",
      "https://kathalog.net/admin/images/cd7355e6e28b1826b63d97919750d761.jpeg",
      "https://kathalog.net/admin/images/9dd3319f577ae97d403bb6370FCFA1e6a01.jpeg",
      "https://kathalog.net/admin/images/16033e21ee5c72227ab452102483d901.jpeg",
     
    ],
    time: "10h - 22h",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },




  {
    name: "Le Goût d’AfriQ",
    type: "dinner",
    region: ["Camerounaise" ,"Africaine"],
    profile: "https://kathalog.net/admin/images/f18057ad85137a458f5468e76c5e2980.jpeg",
    price: "3000FCFA",
    contact: "6 52 65 82 19",
    location:
      " Kotto, Douala",
    menu: [
      "https://kathalog.net/admin/images/48c877d75e59dd42e51aa12d3ff1f090.jpeg",
    ],
    facebook: "https://m.facebook.com/legout040/",
    email:"legout040@gmail.com",
    time: "12h - 22h",
    days: [ "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    
  },

    

  ];
 
}
