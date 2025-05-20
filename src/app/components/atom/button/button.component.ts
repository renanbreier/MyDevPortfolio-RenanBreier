import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  title: string = '';
  @Input()
  link: string = '';
  @Input()
  logo: string = '';
  @Input()
  style: string = '';
  @Input()
  width: string = '';
  @Input()
  height: string = '';
}
