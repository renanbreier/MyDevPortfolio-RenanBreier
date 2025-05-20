import { Component, Input } from '@angular/core';
import { LandingButtonService } from 'src/app/service/landing-button.service';
import { ButtonComponent } from "../atom/button/button.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input()
  id: string = '';

  constructor(private LandingButtonService: LandingButtonService) {}
  scrollToSection(): void {
    this.LandingButtonService.scrollToSection('target');
  }
}
