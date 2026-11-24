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
      let timer: ReturnType<typeof setTimeout>;

      const typeText = (length: number, deleting: boolean): void => {
        this.displayedText.set(welcome.slice(0, length));

        if (length === welcome.length && !deleting) {
          timer = setTimeout(() => typeText(length - 1, true), 1500);
        } else if (length === 0 && deleting) {
          timer = setTimeout(() => typeText(1, false), 500);
        } else {
          timer = setTimeout(() => typeText(length + (deleting ? -1 : 1), deleting), deleting ? 50 : 100);
        }
      };

      typeText(1, false);
      onCleanup(() => clearTimeout(timer));
    });
  }

  scrollToSection(sectionId: string): void {
    this.landingButtonService.scrollToSection(sectionId);
  }
}
