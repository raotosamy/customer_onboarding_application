import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppHeaderComponent } from './onboarding-application/app-header/app-header.component';
import { AppFooterComponent } from './onboarding-application/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    AppHeaderComponent,
    AppFooterComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
