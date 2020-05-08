import { Component, OnInit } from '@angular/core';
import { TranslationComponent } from '../../utils/translation/translation.component';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private translationComponent: TranslationComponent, private translateService: TranslateService) {}
  locale = this.translationComponent.userLocale+this.translationComponent.userLang
  aux = this.translateService.onLangChange.subscribe(lang=>{
    this.locale = this.translationComponent.getLocaleDefault(this.locale)+lang.lang;
  })

  ngOnInit(): void {
  }
}
