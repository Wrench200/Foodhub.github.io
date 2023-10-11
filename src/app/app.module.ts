import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { PNF404Component } from './components/pnf404/pnf404.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarService } from './Services/navbar.service';
import { InitialsPipe } from './Pipes/initials.pipe';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BreadcrumbsComponent,
    HomeComponent,
    RestaurantsComponent,
    PNF404Component,
    RegisterComponent,
    LoginComponent,
    InitialsPipe,
    LoaderComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
   
    
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
