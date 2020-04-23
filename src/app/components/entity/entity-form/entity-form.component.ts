import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

import { UploadService } from '../../../services/config/upload.service';
import { EntityService } from '../../../services/entity/entity.service';

import { EntityHelper } from '../entity-helper';
import { Entity } from '../../../models/entity';
import { CompileReflector } from '@angular/compiler';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, public entityHelper: EntityHelper, private uploadService: UploadService, 
    private entityService: EntityService) { }

  selectedFiles: FileList;
  submitAttemp: boolean;
  type: string;
  entity = new Entity();
  entityForm = new FormGroup({
    name: new FormControl(this.entity.name, [Validators.required]),
    description: new FormControl(this.entity.description, [Validators.required]),
    image: new FormControl(this.entity.exchangable, [Validators.required]),
    exchangable: new FormControl(this.entity.exchangable, [Validators.required])
  });

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.entityHelper.getEntityAttributes(this.entityForm, this.type, this.entity);
    });
  }

  onSubmit() {
    if(!this.entityForm.invalid){
      // this.entityService.create(JSON.stringify(this.entityForm.value)).catch(error => {
      //   console.log(error);
      // });
      const form = new FormData();
      form.append("name",this.entityForm.get('name').value)
      form.append("image",this.selectedFiles.item(0))
      this.entityService.create(form).catch(error => {
        console.log(error);
      });

    } else {
      this.submitAttemp = true;
    }

  }

  upload() {
    const fd = new FormData();
    fd.append("image", this.selectedFiles.item(0));
    fd.append("folder", this.type)
    this.uploadService.uploadFile(fd).catch(error => {
      console.log(error);
    });
  }
    
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  get name() { return this.entityForm.get('name'); }
  get description() { return this.entityForm.get('description'); }
  get exchangable() { return this.entityForm.get('exchangable'); }
  get image() { return this.entityForm.get('image'); }
  get size() { return this.entityForm.get('size'); }
  get place() { return this.entityForm.get('place'); }
  get date() { return this.entityForm.get('date'); }
  get time() { return this.entityForm.get('time'); }
  get sell_price() { return this.entityForm.get('sell_price'); }
  get rarity() { return this.entityForm.get('rarity'); }
  get obtaining() { return this.entityForm.get('obtaining'); }
  get buy_price() { return this.entityForm.get('buy_price'); }
  get clothing_type() { return this.entityForm.get('clothing_type'); }
  get plant_type() { return this.entityForm.get('plant_type'); }
  get animal_type() { return this.entityForm.get('animal_type'); }
  get personality() { return this.entityForm.get('personality'); }
  get genre() { return this.entityForm.get('genre'); }
  get slogan() { return this.entityForm.get('slogan'); }
  get catchphrase() { return this.entityForm.get('catchphrase'); }
  get birthdate() { return this.entityForm.get('birthdate'); }
  get character() { return this.entityForm.get('character'); }
}
