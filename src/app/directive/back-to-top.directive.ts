import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackToTop]',
  standalone: false,
})
export class BackToTopDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll')
  checkScrollPosition() {
    const backToTopButton = this.el.nativeElement;

    if (window.scrollY >= 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }
}
