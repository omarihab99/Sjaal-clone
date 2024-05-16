import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appProduct]',
  standalone: true
})
export class ProductDirective {
  @Input('appProduct') src={orgImg:"",hoverImg:""};

  constructor(public myImg:ElementRef) {}

  @HostListener('mouseover') imgHover(){
    this.myImg.nativeElement.style.backgroundImage=`url(${this.src.hoverImg})`;
  }
  @HostListener('mouseout') imgOut(){
    this.myImg.nativeElement.style.backgroundImage=`url(${this.src.orgImg})`;
  }
}
