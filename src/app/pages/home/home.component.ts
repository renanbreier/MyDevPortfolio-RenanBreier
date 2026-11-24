import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class HomeComponent {
  readonly language = inject(LanguageService);

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
