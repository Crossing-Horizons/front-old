import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { EntityHelper } from '../entity-helper';
import { EntityService } from '../../../services/entity/entity.service';
import { Entity } from 'src/app/models/entity';

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
    this.entityHelper.getPropertyTranslated(this.entity, 'name', this.locale)
  })

  type: string;
  name: string;
  entity: Entity;
  variants = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.name = params['name'];
      this.entityService.getByName(this.name, this.type).then(res => {
        this.entity = res.entity
        this.entity.translations = res.translations
        // processing for variant images
        if(this.entity.variants){
          this.entityVariants();
        }
        // change original name for translated name
        this.entityHelper.getPropertyTranslated(this.entity, 'name', this.locale)
      }).catch(error =>{
        console.log(error)
      })
    });
  }

  entityVariants(){
    if(this.type=='furniture'){
      var furnitureAux1 = parseInt(this.entity.variants.split("_")[0])
      var furnitureAux2 = parseInt(this.entity.variants.split("_")[1])
      if(furnitureAux1 > 0){
        for (let i = 0; i < furnitureAux1; i++) {
          for (let j = 0; j <= furnitureAux2; j++){
            this.variants.push(i + "_" + j)
          }
        }
      } else {
        for (let i = 0; i < furnitureAux2; i++) {
          for (let j = 0; j <= furnitureAux1; j++){
            this.variants.push(j + "_" + i)
          }
        }
      }
      
    } else {
      this.entity.image = this.entity.image.substring(0, this.entity.image.length - 1)
      for (let i = 0; i < parseInt(this.entity.variants); i++){
        this.variants.push(i)
      }
    }
  }
}
