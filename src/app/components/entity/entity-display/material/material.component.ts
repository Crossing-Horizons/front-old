import { Component, OnInit, Input } from '@angular/core';

import { Entity } from 'src/app/models/entity';
import { EntityHelper } from '../../entity-helper';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  constructor(public entityHelper: EntityHelper) { }

  @Input() type: string;
  @Input() entity: Entity;

  ngOnInit(): void {
  }

}
