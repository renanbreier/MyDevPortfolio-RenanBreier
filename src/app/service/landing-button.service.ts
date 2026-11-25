import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LandingButtonService {
  constructor() {}
  scrollToSection(sectionId: string): void {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  }
}
