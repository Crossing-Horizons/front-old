import { Component, OnInit, Input } from '@angular/core';

import { Entity } from 'src/app/models/entity';
import { EntityHelper } from '../../entity-helper';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor(public entityHelper: EntityHelper) { }

  @Input() type: string;
  @Input() entity: Entity;

  ngOnInit(): void {
  }

}
