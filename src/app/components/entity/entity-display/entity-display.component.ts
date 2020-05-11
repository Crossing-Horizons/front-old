import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { EntityHelper } from '../entity-helper';
import { EntityService } from '../../../services/entity/entity.service';
import { Entity} from 'src/app/models/entity';

import {TranslateService} from '@ngx-translate/core'
import {TranslationComponent} from '../../../utils/translation/translation.component'

@Component({
  selector: 'app-entity-display',
  templateUrl: './entity-display.component.html',
  styleUrls: ['./entity-display.component.scss']
})
export class EntityDisplayComponent implements OnInit {

  constructor(private route: ActivatedRoute, public entityHelper: EntityHelper, private entityService: EntityService, 
    private translateService: TranslateService, private translationComponent: TranslationComponent) {}

  locale = this.translationComponent.userLocale+this.translationComponent.userLang
  aux = this.translateService.onLangChange.subscribe(lang=>{
    this.locale = this.translationComponent.getLocaleDefault(this.locale)+lang.lang;
    this.entityHelper.getPropertyTranslated(this.entity, 'name', this.locale, this.name_translations)
  })

  type: string;
  name: string;
  entity: Entity;
  name_translations


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.name = params['name'];
      this.entityService.get(this.name, this.type).then(res => {
        this.entity = res.entity
        this.name_translations = res.translations
        this.entityHelper.getPropertyTranslated(this.entity, 'name', this.locale, this.name_translations)
      }).catch(error =>{
        console.log(error)
      })
    });
  }

}
