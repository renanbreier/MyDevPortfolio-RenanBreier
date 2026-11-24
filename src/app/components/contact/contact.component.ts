import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
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

  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit(formData: any) {
    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.message === ''
    ) {
      alert(this.language.text().contactRequired);
      return;
    }
    alert(this.language.text().contactSuccess);
  }
}
