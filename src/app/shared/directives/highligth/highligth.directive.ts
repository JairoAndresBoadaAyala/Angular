import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective {

  constructor(
    elementRef: ElementRef
  ) {
    elementRef.nativeElement.style.backgroundColor = 'red';
   }

}
