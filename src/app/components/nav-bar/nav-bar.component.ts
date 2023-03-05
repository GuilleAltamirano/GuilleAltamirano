import { Component, EventEmitter, Output } from '@angular/core';
import { TranslationPipe } from '../../pipes/translation.pipe';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  isScrolled = false;
  scrollListener: any;
  bw = true
  en = true

  @Output() mode = new EventEmitter<boolean>();
  @Output() language = new EventEmitter<boolean>();

  isBW = () => {
      this.bw = !this.bw;
      this.mode.emit(this.bw);
      return this.bw;
  }

  isEn = () => {
    this.en = !this.en;
    this.language.emit(this.en)
    return this.en
  }

  ngOnInit() {
    this.scrollListener = () => {
      if (window.pageYOffset > 50) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  }
}
