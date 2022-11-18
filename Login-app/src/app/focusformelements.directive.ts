import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusformelements]'
})
export class FocusformelementsDirective {

  constructor(private el:ElementRef) { }

  @HostListener ('submit') onFormSubmit() : void{
    const invalidcontrol = this.el.nativeElement.querySelector('.ng-invalid');
  
  if (invalidcontrol){
    invalidcontrol.focus();

  }
  }
}
