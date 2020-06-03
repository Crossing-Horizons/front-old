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
import { ModuleTranslateLoader, IModuleTranslationOptions } from '@larscom/ngx-translate-module-loader';

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

import { FormUtilities } from './utils/form-utilities';
import { PlantComponent } from './components/entity/entity-display/plant/plant.component';
import { RecipeComponent } from './components/entity/entity-display/recipe/recipe.component';
import { VillagerComponent } from './components/entity/entity-display/villager/villager.component';
import { CrittersComponent } from './components/entity/entity-display/critters/critters.component';
import { FossilComponent } from './components/entity/entity-display/fossil/fossil.component';
import { ConstructionComponent } from './components/entity/entity-display/construction/construction.component';
import { ArtComponent } from './components/entity/entity-display/art/art.component';
import { MusicComponent } from './components/entity/entity-display/music/music.component';
import { ReactionComponent } from './components/entity/entity-display/reaction/reaction.component';
import { FurnitureComponent } from './components/entity/entity-display/furniture/furniture.component';
import { ClothesComponent } from './components/entity/entity-display/clothes/clothes.component';
import { ToolComponent } from './components/entity/entity-display/tool/tool.component';
import { MaterialComponent } from './components/entity/entity-display/material/material.component';
import { EventComponent } from './components/entity/entity-display/event/event.component';
import { NpcComponent } from './components/entity/entity-display/npc/npc.component';
import { AchievementComponent } from './components/entity/entity-display/achievement/achievement.component';

export function moduleHttpLoaderFactory(http: HttpClient) {
  const baseTranslateUrl = './assets/i18n';
 
  const options: IModuleTranslationOptions = {
    nameSpaceUppercase: false,
    modules: [
      { baseTranslateUrl },
      { moduleName: 'authentication', baseTranslateUrl },
      { moduleName: 'common', baseTranslateUrl },
      { moduleName: 'entity', baseTranslateUrl },
      { moduleName: 'user', baseTranslateUrl }
    ]
  };
  return new ModuleTranslateLoader(http, options);
}

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
    EntityPanelComponent,
    PlantComponent,
    RecipeComponent,
    VillagerComponent,
    CrittersComponent,
    FossilComponent,
    ConstructionComponent,
    ArtComponent,
    MusicComponent,
    ReactionComponent,
    FurnitureComponent,
    ClothesComponent,
    ToolComponent,
    MaterialComponent,
    EventComponent,
    NpcComponent,
    AchievementComponent,
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
      useFactory: moduleHttpLoaderFactory,
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
