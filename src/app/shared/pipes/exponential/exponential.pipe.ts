import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edades'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: Date): number {
    if (value){
      const convertAge = new Date(value);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
  }
}
