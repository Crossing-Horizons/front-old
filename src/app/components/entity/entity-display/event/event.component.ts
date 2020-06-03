import { Component, OnInit, Input } from '@angular/core';

import { Entity } from 'src/app/models/entity';
import { EntityHelper } from '../../entity-helper';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(public entityHelper: EntityHelper) { }

  @Input() type: string;
  @Input() entity: Entity;

  ngOnInit(): void {
  }

}
