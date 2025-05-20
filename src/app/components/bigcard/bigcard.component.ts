import { Component } from '@angular/core';
import { LandingButtonService } from 'src/app/service/landing-button.service';

@Component({
  selector: 'app-bigcard',
  templateUrl: './bigcard.component.html',
  styleUrls: ['./bigcard.component.css']
})
export class BigcardComponent {
    showLinks = false;
  
    constructor(private LandingButtonService: LandingButtonService) {}
  
    toggleLinks(): void {
      this.showLinks = !this.showLinks;
    }
  
    scrollToSection(sectionId: string): void {
      this.LandingButtonService.scrollToSection(sectionId);
    }
}
