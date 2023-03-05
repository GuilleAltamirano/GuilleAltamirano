import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';

@Pipe({
  name: 'translation'
})
export class TranslationPipe implements PipeTransform {
  constructor(private translate: TranslateService, private NavBarComponent: NavBarComponent){}

  transform(value: string): string {
    const isEn = this.NavBarComponent.isEn();
    this.NavBarComponent.isEn();
    return this.translate.instant(value);
  }
}


