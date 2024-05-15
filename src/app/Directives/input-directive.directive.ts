import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputDirective]',
  standalone: true
})
export class InputDirectiveDirective {


  private initialBorderStyle: string;

  constructor(private el: ElementRef) {
    this.initialBorderStyle = this.el.nativeElement.style.border; // Store the initial border style
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.border = '2px solid gray'; // Apply the border on mouse enter
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = this.initialBorderStyle; // Restore the initial border style on mouse leave
  }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.border = '3px solid gray'; // Change the border on click
  }

}

