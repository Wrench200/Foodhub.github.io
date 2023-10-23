import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { PNF404Component } from './components/pnf404/pnf404.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndividualrestaurantComponent } from './components/individualrestaurant/individualrestaurant.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { logoutGuard } from './logout.guard';
import { lockGuard } from './lock.guard';
import { OrderComponent } from './components/order/order.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'

  },
  {
    path: 'dashboard', component: DashboardComponent, title: 'Dashboard'
  },
  {
    path: 'indi', component: IndividualrestaurantComponent, title: ''

  },
  {
path: 'about', component: AboutUsComponent, title: 'About us'
  },
  {
path: 'contact', component: ContactusComponent, title: 'Contact us'
  },
  {
    path: 'home', component: HomeComponent, title: 'FoodHub Home',
  },
  {
path: 'order', component: OrderComponent, title: 'order'
  },
  {
    path: 'restaurants', component: RestaurantsComponent, title: 'FoodHub Restaurants'
  },
  {
    path: 'register', component: RegisterComponent, title: 'Register', canActivate: [logoutGuard]
  },
  {
    path: 'favourites', component: FavouritesComponent, title: 'Favorites', canActivate: [lockGuard]
  },
  {
    path: 'login', component: LoginComponent, title: 'Login', canActivate: [logoutGuard]
  },
  {
    path: 'breadcrumbs', component: BreadcrumbsComponent, title: 'bread'
  },
  {
    path: '**', component: PNF404Component, title: '404'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
