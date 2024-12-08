import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './onboarding-application/app-header/app-header.component';
import { AppFooterComponent } from './onboarding-application/app-footer/app-footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AppHeaderComponent,
    AppFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-frontend';
}
