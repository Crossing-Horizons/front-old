import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Material Design for Bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Input mask
import { NgxMaskModule, IConfig } from 'ngx-mask'

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Application components
import { AppComponent } from './app.component';
import { TranslationComponent } from './utils/translation/translation.component';
import { HeaderComponent } from './components/base/header/header.component';
import { IndexComponent } from './components/base/index/index.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ConfirmationComponent } from './components/authentication/confirmation/confirmation.component';
import { EntityFormComponent } from './components/entity/entity-form/entity-form.component';
import { EntityHelper } from './components/entity/entity-helper';
import { EntityDisplayComponent } from './components/entity/entity-display/entity-display.component';
import { EntityPanelComponent } from './components/entity/entity-panel/entity-panel.component';

import { FormUtilities } from './utils/form-utilities'

@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmationComponent,
    EntityFormComponent,
    EntityDisplayComponent,
    EntityPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxMaskModule.forRoot(),
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
  providers: [
    EntityHelper,
    TranslationComponent,
    FormUtilities,
    EntityFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  options: Partial<IConfig> | (() => Partial<IConfig>);
}
