import { Component, OnInit, Input } from '@angular/core';

import { Entity } from 'src/app/models/entity';
import { EntityHelper } from '../../entity-helper';

@Component({
  selector: 'app-critters',
  templateUrl: './critters.component.html',
  styleUrls: ['./critters.component.scss']
})
export class CrittersComponent implements OnInit {

  constructor(public entityHelper: EntityHelper) { }

  @Input() type: string;
  @Input() entity: Entity;

  ngOnInit(): void {
  }

}
