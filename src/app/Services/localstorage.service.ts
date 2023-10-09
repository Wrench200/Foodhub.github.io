import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getitem(key: string) {
  localStorage.getItem(key);
  }
  saveitem(key: string, value: any) { 
    localStorage.setItem(key, JSON.stringify(value));
  }
  removeitem(key: string) {
    localStorage.removeItem(key)
  }
  
}
