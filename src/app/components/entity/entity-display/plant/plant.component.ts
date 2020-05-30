import { Component, OnInit, Input } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { EntityService } from 'src/app/services/entity/entity.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  constructor(private entityService: EntityService) { }
  @Input() type: string;
  @Input() entity: Entity;

  hybrid_parents;
  seed_bag;

  ngOnInit(): void {
    if(this.entity.plant_type=='flower'){
      console.log(this.entity)
      if(this.entity.obtainment == 'Hybrid'){
        console.log('es hibrida')
        this.entityService.getHybridParents(this.entity.id).then(res => {
          console.log(res)
          this.hybrid_parents = res;
        })
      } else if(this.entity.obtainment == 'Seed bag'){
        this.entityService.getByName(this.entity.translations.EUen.replace("plant", "seed"), this.type).then(res => {
          this.seed_bag = res.entity;
          console.log(res)
        })
      }
    } 
  }

}
