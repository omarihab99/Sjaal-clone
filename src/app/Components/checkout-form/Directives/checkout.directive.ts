import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCheckout]',
  standalone: true
})
export class CheckoutDirective {
  @Input('appCheckout') mycolor={color:"",bgcolor:""};
  
  constructor(public container:ElementRef) {
   
  }

  @HostListener('click') click(){
    this.container.nativeElement.style.borderColor = this.mycolor.color;
    this.container.nativeElement.style.backgroundColor = this.mycolor.bgcolor;

  }
  @HostListener('mouseleave') leave(){
    this.container.nativeElement.style.borderColor = "";
    this.container.nativeElement.style.backgroundColor = "";
  }

}
