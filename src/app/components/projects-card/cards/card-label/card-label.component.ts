import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css'],
})
export class CardLabelComponent {
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
