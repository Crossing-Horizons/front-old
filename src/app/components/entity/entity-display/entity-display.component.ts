import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { EntityHelper } from '../entity-helper';

@Component({
  selector: 'app-entity-display',
  templateUrl: './entity-display.component.html',
  styleUrls: ['./entity-display.component.scss']
})
export class EntityDisplayComponent implements OnInit {

  constructor(private route: ActivatedRoute, public entityHelper: EntityHelper) { }

  type: string;
  name: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.name = params['name'];
    });
  }

}
