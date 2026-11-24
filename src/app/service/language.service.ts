import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';
import { portfolioText } from './portfolio-text';

export type Language = 'pt-BR' | 'en-US';
export type Localized<T> = Record<Language, T>;

const storageKey = 'portfolio-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly selectedLanguage = signal<Language>(this.readLanguage());

  readonly language = this.selectedLanguage.asReadonly();
  readonly text = computed(() => portfolioText[this.language()]);

  constructor() {
    this.updateDocument();
  }

  select(language: Language): void {
    this.selectedLanguage.set(language);
    this.updateDocument();

    try {
      this.document.defaultView?.localStorage.setItem(storageKey, language);
    } catch {
      // Language switching still works if storage is unavailable.
    }
  }

  private readLanguage(): Language {
    try {
      if (this.document.defaultView?.localStorage.getItem(storageKey) === 'en-US') {
        return 'en-US';
      }
    } catch {
      // Use Portuguese when storage is unavailable.
    }

    return 'pt-BR';
  }

  private updateDocument(): void {
    this.document.documentElement.lang = this.language();
    this.document.title = this.text().pageTitle;
  }
}
