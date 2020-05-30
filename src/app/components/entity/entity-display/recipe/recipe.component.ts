import { Component, OnInit, Input } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { EntityService } from 'src/app/services/entity/entity.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(private entityService: EntityService) { }

  @Input() type: string;
  @Input() entity: Entity;

  ngOnInit(): void {
    this.entityService.getRecipeAndMaterials(this.entity.translations.EUen).then(res => {
      console.log(res)
    })
  }

}
