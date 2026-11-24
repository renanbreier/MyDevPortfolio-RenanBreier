import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit(formData: any) {
    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.message === ''
    ) {
      alert('Name, email, and message fields are required!');
      return;
    }
    alert('Message sent successfully!');
  }
}
