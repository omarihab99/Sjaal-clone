import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputDirective]',
  standalone: true
})
export class InputDirectiveDirective {


  private initialBorderStyle: string;

  constructor(private el: ElementRef) {
    this.initialBorderStyle = this.el.nativeElement.style.border; // Store the initial border style
    this.el.nativeElement.setAttribute('tabindex', '0'); // Make the div focusable
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.border = '2px solid gray'; 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = this.initialBorderStyle; // Restore the initial border style on mouse leave
  }

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.border = '3px solid black'; // Change the border on focus
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.border = this.initialBorderStyle; // Restore the initial border style on blur
  }
}