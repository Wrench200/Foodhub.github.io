import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from 'src/app/Services/auth.service';
import { NavbarService } from 'src/app/Services/navbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {


  signupForm!: FormGroup
  saveError: string = ''

  constructor(
    private formbuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router,
    public nav: NavbarService

  ) { }



  ngOnInit(): void {
this.nav.hide
    this.signupForm = this.formbuilder.group({

      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.pattern(/[a-zA-Z]/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/),
      ]),
    })
  }
  onSubmit(): void {
console.log('submited');

    const save = this.authservice.register(this.signupForm.value);
    if (!save.error) {


      localStorage.setItem('auth', JSON.stringify(save.data))
      this.redirectTo('home', 2000)
     
      
    } else {


      this.saveError = save.message
    }
  }

  redirectTo(uri: string, time: number) {
    this.router.navigate(['breadcrumbs'],{ queryParams: { uri: uri,time } })
  }
}
