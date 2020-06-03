import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { Entity } from 'src/app/models/entity';
import { EntityService } from 'src/app/services/entity/entity.service';
import { EntityHelper } from '../../entity-helper';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RecipeComponent implements OnInit, OnChanges {

  constructor(private entityService: EntityService, private entityHelper: EntityHelper) { }

  initialized = false;

  @Input() type: string;
  @Input() entity: Entity;
  @Input() locale;

  recipe: Entity;
  materials: Array<Entity> = [];

  ngOnInit(): void {
    this.entityService.getRecipeAndMaterials(this.entity.translations.EUen, this.type).then(res => {
      this.recipe = res.recipe.entity;
      this.recipe.translations = res.recipe.translations;
      this.entityHelper.getPropertyTranslated(this.recipe, 'name', this.locale)
      res.materials.forEach(materialRes =>{
        var material: Entity = materialRes[0].entity;
        material.quantity = materialRes[1]
        material.translations = materialRes[0].translations;
        this.entityHelper.getPropertyTranslated(material, 'name', this.locale)
        this.materials.push(material)
      })
    }).then(res => {
      this.initialized = true;
    })
  }

  ngOnChanges(): void {
    if(this.initialized){
      this.entityHelper.getPropertyTranslated(this.recipe, 'name', this.locale)
      this.materials.forEach(material => {
        this.entityHelper.getPropertyTranslated(material, 'name', this.locale)
      })
    }
  }
}
