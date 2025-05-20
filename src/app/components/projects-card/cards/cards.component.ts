import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input()
  projImg: string = '';
  @Input()
  title: string = '';
  @Input()
  sub: string = '';
  @Input()
  tech_1: string = '';
  @Input()
  tech_2: string = '';
  @Input()
  tech_3: string = '';
  @Input()
  tech_4: string = '';
  @Input()
  tech_5: string = '';
  @Input()
  view: string = '';
  @Input()
  code: string = '';
}
