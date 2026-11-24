import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LandingButtonService } from '../../service/landing-button.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class MenuBarComponent {
  @Input()
  id: string = '';

  showLinks = false;

  constructor(private LandingButtonService: LandingButtonService) {}

  toggleLinks(): void {
    this.showLinks = !this.showLinks;
  }

  scrollToSection(sectionId: string): void {
    this.LandingButtonService.scrollToSection(sectionId);
  }
}
