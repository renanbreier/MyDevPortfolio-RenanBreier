import { Component, ChangeDetectionStrategy, effect, inject, signal } from '@angular/core';
import { LandingButtonService } from '../../service/landing-button.service';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-bigcard',
  templateUrl: './bigcard.component.html',
  styleUrls: ['./bigcard.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BigcardComponent {
  readonly language = inject(LanguageService);
  readonly displayedText = signal('');

  constructor(private landingButtonService: LandingButtonService) {
    effect((onCleanup) => {
      const welcome = this.language.text().welcome;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      let timer: ReturnType<typeof setTimeout>;
      const typeText = (length: number, deleting: boolean): void => {
        this.displayedText.set(welcome.slice(0, length));

        if (length === welcome.length) {
          timer = setTimeout(() => typeText(length - 1, true), 1500);
        } else if (length === 0) {
          timer = setTimeout(() => typeText(1, false), 500);
        } else if (deleting) {
          timer = setTimeout(() => typeText(length - 1, true), 50);
        } else {
          timer = setTimeout(() => typeText(length + 1, false), 100);
        }
      };

      const updateAnimation = () => {
        clearTimeout(timer);
        if (reducedMotion.matches) {
          this.displayedText.set(welcome);
        } else {
          typeText(1, false);
        }
      };

      updateAnimation();
      reducedMotion.addEventListener('change', updateAnimation);
      onCleanup(() => {
        clearTimeout(timer);
        reducedMotion.removeEventListener('change', updateAnimation);
      });
    });
  }

  scrollToSection(sectionId: string): void {
    this.landingButtonService.scrollToSection(sectionId);
  }
}
