import { Component, OnInit, Input } from '@angular/core';

import { Entity } from 'src/app/models/entity';
import { EntityHelper } from '../../entity-helper';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss']
})
export class NpcComponent implements OnInit {

  constructor(public entityHelper: EntityHelper) { }

  @Input() type: string;
  @Input() entity: Entity;

  ngOnInit(): void {
  }
  
}
