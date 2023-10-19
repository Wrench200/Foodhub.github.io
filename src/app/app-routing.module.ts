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
    path: 'home', component: HomeComponent, title: 'FoodHub Home',
  },
  {
    path: 'restaurants', component: RestaurantsComponent, title: 'FoodHub Restaurants'
  },
  {
    path: 'register', component: RegisterComponent, title: 'Register'
  },
  {
    path: 'favourites', component: FavouritesComponent, title: 'Favorites'
  },
  {
  path: 'login', component: LoginComponent, title: 'Login'
  },
  {
    path: 'breadcrumbs', component: BreadcrumbsComponent, title: 'bread'
  },
  {
    path: '**', component: PNF404Component, title: '404'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
