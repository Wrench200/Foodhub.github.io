import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { user } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localstorage: LocalstorageService
  ) { }

  private emailExist(email: string): string | null {

    let email_exist: boolean = false;
    const users: Array<user> = this.localstorage.getitem('users');
    if (users) {

      for (let i = 0; i < users.length; i++) {
        const current_user = users[i];
        if (current_user.email == email) {

          email_exist = true;
          break;
        }
      }
    }

    return email_exist ? 'Email already exist !!!' : null;
  }

  private getCurrentDate(): string {

    const date = new Date();
    const created_at = date.getUTCFullYear() + '-' +
      ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
      ('00' + date.getUTCDate()).slice(-2) + ' ' +
      ('00' + date.getUTCHours()).slice(-2) + ':' +
      ('00' + date.getUTCMinutes()).slice(-2) + ':' +
      ('00' + date.getUTCSeconds()).slice(-2);

    return created_at;
  }
  private passencrypt(password: string): any {
    const pass = window.btoa(password)
    return pass
  }
  private passdecrypt(password: string): any {
    const pass2 = window.atob(password)
    return pass2
  }
  register(user: any) {

    const checkEmail = this.emailExist(user.email);
    if (checkEmail) {

      return {
        error: true,
        message: 'checkEmail'
      }
    }


    let users: Array<user> = this.localstorage.getitem('users') ?? [];
    user['password'] = this.passencrypt(user.password)
    user['id'] = Date.now(); 
    user['favorite']=[]
    user['created_at'] = this.getCurrentDate();
    delete user.confirm_password;
    users.push(user);

    this.localstorage.saveitem('users', users);

    return {
      error: false,
      message: 'User create successfuly !!!',
      data: user
    }
  }

  login(email: string, password: string) {

    const users: Array<user> = this.localstorage.getitem('users');
    let login_user: user | null = null;
    if (users) {

      for (let i = 0; i < users.length; i++) {

        const user = users[i];
       


        if (user.email == email && this.passdecrypt(user.password) == password) {

          login_user = user;
          break
        }
      }
    }

    if (login_user) {

      this.localstorage.saveitem('auth', login_user);
      return {
        error: false,
        message: 'User login successfully !!!',
        data: login_user
      }
    }

    return {
      error: true,
      message: 'Invalid credentials'
    }
  }

  auth() {

    const user: any = this.localstorage.getitem('auth');
    if (user) {

      return {
        error: false,
        message: 'User authenticate',
        data: user
      }
    }

    return {
      error: true,
      message: 'User not authenticate'
    }
  }

}
