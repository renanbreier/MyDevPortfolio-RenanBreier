import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class InputComponent {
  @Input()
  type: string = '';
  @Input()
  name: string = '';
  @Input()
  class: string = '';
  @Input()
  placeholder: string = '';
}
