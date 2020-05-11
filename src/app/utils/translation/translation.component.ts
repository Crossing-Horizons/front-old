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

  // default lenguage and locale
  public activeLang = 'en';
  public activeLocale = 'EU';

  // user browser language
  public userLang = this.availableLanguages().includes(navigator.language.split("-")[0]) ? navigator.language.split("-")[0] : this.activeLang;
  public userLocale = this.getLocaleDefault(this.userLang);

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.userLang);
  }

  ngOnInit() {
  }
  
  public changeLanguage(lang, locale) {
    // Call translation service to use translation library
    this.translate.use(lang);

    // Sets translation variables
    this.userLang = lang;
    this.userLocale = locale;
  }

  public getLocaleDefault(lang){
    switch(lang){
      case 'zh': return 'CN';
      case 'ja': return 'JP';
      case 'ko': return 'KR';
      default: return 'EU';
    }
  }
}