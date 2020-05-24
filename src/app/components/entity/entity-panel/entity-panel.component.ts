import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

import {EntityFormComponent} from '../entity-form/entity-form.component'

import { EntityHelper } from '../entity-helper';
import { Entity, Type } from '../../../models/entity';

@Component({
  selector: 'app-entity-panel',
  templateUrl: './entity-panel.component.html',
  styleUrls: ['./entity-panel.component.scss']
})
export class EntityPanelComponent implements OnInit {
  @ViewChild('content', { static: true }) public contentModal;

  constructor(private route: ActivatedRoute, public entityHelper: EntityHelper, public entityFormComponent: EntityFormComponent) { }

  type: string;
  creating: boolean = this.route.snapshot.data['creating']
  entityForm;
  entity: Entity;
  submitAttemp: boolean;

  // Enums
  types = Type;

  ngOnInit(): void {
    this.entityFormComponent.creating = this.creating
  }

  show(value: string){
    this.type = value;
    this.entity = new Entity();

    // Initialize the form and add the corresponding attributes according to the type
    this.entityForm = new FormGroup({});
    this.entityHelper.getEntityFormAttributes(this.entityForm, this.type, this.entity);

    this.contentModal.show();
  }
}
