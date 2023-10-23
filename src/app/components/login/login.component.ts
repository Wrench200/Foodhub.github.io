import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { NavbarService } from 'src/app/Services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loginError: string = '';
  error_message: string | null = null
  url!: string 
  OnInit() {
  
}
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public nav: NavbarService
  ) {
    this.route.queryParams.subscribe((query: any) => {
      if (query.message) {
        this.error_message = query.message
      }
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.url = params['uri']


    })
    
    this.nav.hide()
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required
        
      ]],

      password: ['', [
        Validators.required
      ]]
    })

  }

  private clearError(): void {
    setTimeout(() => {
      this.loginError = ''
    }, 3000);
  }

  onSubmit() {


    const form = this.loginForm.value;
    const login = this.authService.login(form.email, form.password)
    if (login.error) {

      this.loginError = login.message;
      this.clearError();
    } else {
      console.log(login.data);
      localStorage.setItem('auth', JSON.stringify(login.data))
      this.redirectTo('home', 2000)
    }
  }
  redirectTo(uri: string, time: number) {
    this.router.navigate(['breadcrumbs'], { queryParams: { uri: uri, time } })
  }
}
