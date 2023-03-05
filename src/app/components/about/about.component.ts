import { Component, Input } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  @Input() currentMode!: boolean;
  @Input() currentLanguage!: boolean;
}
