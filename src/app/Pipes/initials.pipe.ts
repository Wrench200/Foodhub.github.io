import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'initials',
 
})
export class InitialsPipe implements PipeTransform {

  

  transform(value: string): string {

    const wordarray = value.split(',');
    const initials = wordarray.map(word => word.charAt(0));
    return initials.join('');
  }
}
