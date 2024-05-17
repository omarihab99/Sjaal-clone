import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEnlarge]',
  standalone: true
})
export class EnlargeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(0.99)');
  }

}
