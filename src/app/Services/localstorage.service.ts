import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getitem(key: string) {
    const content = localStorage.getItem(key);
    if (content) {

      const convert_to_json = JSON.parse(content);
      return convert_to_json;
    }

    return content;
  }
  
  saveitem(key: string, data: any): void {

    const convert_to_string = JSON.stringify(data);
    localStorage.setItem(key, convert_to_string);
  }
  removeitem(key: string) {
    localStorage.removeItem(key)
  }
  
}
