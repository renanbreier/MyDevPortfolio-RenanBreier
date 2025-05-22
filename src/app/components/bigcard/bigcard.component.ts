import { Component, OnInit } from '@angular/core';
import { LandingButtonService } from 'src/app/service/landing-button.service';

@Component({
  selector: 'app-bigcard',
  templateUrl: './bigcard.component.html',
  styleUrls: ['./bigcard.component.css']
})
export class BigcardComponent implements OnInit {
  showLinks = false;

  // Propriedades para animação de digitação
  fullText = 'Bem-vindo ao meu portfólio';
  displayedText = '';
  typingSpeed = 100;
  isDeleting = false;
  loop = true;

  constructor(private LandingButtonService: LandingButtonService) {}

  ngOnInit(): void {
    this.typeText();
  }

  toggleLinks(): void {
    this.showLinks = !this.showLinks;
  }

  scrollToSection(sectionId: string): void {
    this.LandingButtonService.scrollToSection(sectionId);
  }

  typeText(i: number = 0): void {
    if (this.isDeleting) {
      this.displayedText = this.fullText.substring(0, i - 1);
      i--;
    } else {
      this.displayedText = this.fullText.substring(0, i + 1);
      i++;
    }

    const delay = this.isDeleting ? 50 : this.typingSpeed;

    if (!this.isDeleting && i === this.fullText.length) {
      setTimeout(() => {
        this.isDeleting = true;
        this.typeText(i);
      }, 1500);
    } else if (this.isDeleting && i === 0) {
      if (this.loop) {
        this.isDeleting = false;
        setTimeout(() => this.typeText(i), 500);
      }
    } else {
      setTimeout(() => this.typeText(i), delay);
    }
  }
}