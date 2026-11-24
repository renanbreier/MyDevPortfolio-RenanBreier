import { inject, Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../../service/language.service';
import { LandingButtonService } from '../../service/landing-button.service';
import { ButtonComponent } from "../atom/button/button.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AboutComponent {
  readonly language = inject(LanguageService);

  @Input()
  id: string = '';

  constructor(private LandingButtonService: LandingButtonService) {}
  scrollToSection(): void {
    this.LandingButtonService.scrollToSection('target');
  }
}
