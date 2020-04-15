import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Material Design for Bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Application
import { AppComponent } from './app.component';
import { TranslationComponent } from './utils/translation/translation.component';
import { HeaderComponent } from './components/base/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { LoginComponent } from './components/authentication/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
      },
      deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
