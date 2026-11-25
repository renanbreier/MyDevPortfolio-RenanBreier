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
      if (reducedMotion.matches) {
        this.displayedText.set(welcome);
        return;
      }

      let length = 0;
      let timer: ReturnType<typeof setTimeout>;
      const finishTyping = () => {
        clearTimeout(timer);
        this.displayedText.set(welcome);
      };
      const typeNextCharacter = () => {
        length += 1;
        this.displayedText.set(welcome.slice(0, length));
        if (length < welcome.length) {
          timer = setTimeout(typeNextCharacter, 55);
        }
      };

      typeNextCharacter();
      reducedMotion.addEventListener('change', finishTyping);
      onCleanup(() => {
        clearTimeout(timer);
        reducedMotion.removeEventListener('change', finishTyping);
      });
    });
  }

  scrollToSection(sectionId: string): void {
    this.landingButtonService.scrollToSection(sectionId);
  }
}
