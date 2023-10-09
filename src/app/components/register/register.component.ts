import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

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
    private router: Router
  ) { }



  ngOnInit(): void {

    this.signupForm = this.formbuilder.group({

      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/),
      ]),
    })
  }
  onSubmit(): void {
console.log('submited');

    const save = this.authservice.register(this.signupForm.value);
    if (!save.error) {
console.log('good');

      localStorage.setItem('auth', JSON.stringify(save.data))
      this.router.navigate(['/home'], {

        queryParams: { id: save.data?.id }
      })
    } else {
console.log('badd');

      this.saveError = save.message
    }
  }

  
}
