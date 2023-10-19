import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'tittle'
})
export class TittlePipe implements PipeTransform {

  transform(value: string, num: number): string {

    const wordarray = value.split(',');
    const initials = wordarray.map(word => word.slice(0, num));
    return initials.join('') + '...';
  }

}
