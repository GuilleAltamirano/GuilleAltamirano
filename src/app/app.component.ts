import { Component, ViewChild } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'guilleAltamirano';

  @ViewChild(NavBarComponent) NavBarComponent!: NavBarComponent

  public currentMode = true
  public currentLanguage = true

  public onModeChange(mode: boolean) {
    this.currentMode = mode;
  }

  public onLanguageChange(language: boolean) {
    this.currentLanguage = language
  }
}
