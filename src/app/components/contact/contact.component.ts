import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ContactComponent {
  readonly language = inject(LanguageService);
  readonly email = 'renanoliveirabreier@gmail.com';
  readonly copyResult = signal<boolean | null>(null);
  private readonly clipboard = inject(Clipboard);

  copyEmail(): void {
    this.copyResult.set(this.clipboard.copy(this.email));
  }
}
