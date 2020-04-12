import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {

  // available languages
  public availableLanguages(){
    return ['es', 'en'];
  }

  // default lenguage
  public activeLang = 'en';
  // user browser language
  userLang = this.availableLanguages().includes(navigator.language.split("-")[0]) ? navigator.language.split("-")[0] : this.activeLang;
  
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.userLang);
  }

  ngOnInit() {
  }
  
  public cambiarLenguaje(lang) {
    this.translate.use(lang);
  }
}