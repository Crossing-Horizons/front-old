import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

import { UploadService } from '../../../services/config/upload.service';
import { EntityService } from '../../../services/entity/entity.service';

import { EntityHelper } from '../entity-helper';
import { Entity } from '../../../models/entity';

import {clothing_types,types,durabilities,personalities} from '../entity-enum'

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent implements OnInit {
  @ViewChild('content', { static: true }) public contentModal;

  constructor(private route: ActivatedRoute, public entityHelper: EntityHelper, private uploadService: UploadService, 
    private entityService: EntityService) { }

  selectedFiles: FileList;
  imgPreview;
  submitAttemp: boolean;
  type: string;
  entity: Entity;
  creating: boolean = this.route.snapshot.data['creating']
  entityForm;
  types = types;

  ngOnInit(): void {
    if(this.creating){
      this.entity = new Entity();
    } else {

    }

    this.entityForm = new FormGroup({
      name: new FormControl(this.entity.name, [Validators.required]),
      description: new FormControl(this.entity.description, [Validators.required]),
      image: new FormControl(this.entity.image, [Validators.required]),
      exchangeable: new FormControl(this.entity.exchangeable, [Validators.required])
    });
    // set checkboxes false by default
    this.entityForm.get('exchangeable').setValue(false)
    this.entityHelper.getEntityFormAttributes(this.entityForm, this.type, this.entity);
  }

  show(value:string){
    this.type = value;
    this.entityForm.reset();
    this.entityHelper.getEntityFormAttributes(this.entityForm, this.type, this.entity);
    this.contentModal.show();
  }

  onSubmit() {
    if(!this.entityForm.invalid){
      var form = new FormData();
      form.append("name",this.entityForm.get('name').value)
      form.append("description",this.entityForm.get('description').value)
      form.append("exchangeable",this.entityForm.get('exchangeable').value)
      form.append("type", this.type)
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const file = this.selectedFiles[i];
        form.append("image", file);
      }
      console.log(form)
      form = this.entityHelper.getEntityDataAttributes(form, this.type, this.entityForm)
      this.entityService.create(form).catch(error => {
        console.log(error);
      });

    } else {
      this.submitAttemp = true;
    }
  }
    
  selectFile(event) {
    this.selectedFiles = event.target.files;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imgPreview = event.target.result;
      }
    }
  }

  get name() { return this.entityForm.get('name'); }
  get description() { return this.entityForm.get('description'); }
  get image() { return this.entityForm.get('image'); }
  get exchangeable() { return this.entityForm.get('exchangeable'); }
  get shadow() { return this.entityForm.get('shadow'); }
  get location() { return this.entityForm.get('location'); }
  get month_northern() { return this.entityForm.get('month_northern'); }
  get month_southern() { return this.entityForm.get('month_southern'); }
  get time() { return this.entityForm.get('time'); }
  get all_day() { return this.entityForm.get('all_day'); }
  get all_year() { return this.entityForm.get('all_year'); }
  get price_cj() { return this.entityForm.get('price_cj'); }
  get price_flick() { return this.entityForm.get('price_flick'); }
  get rarity() { return this.entityForm.get('rarity'); }
  get museum_phrase() { return this.entityForm.get('museum_phrase'); }
  get obtainment() { return this.entityForm.get('obtainment'); }
  get buy_price() { return this.entityForm.get('buy_price'); }
  get sell_price() { return this.entityForm.get('sell_price'); }
  get date() { return this.entityForm.get('date'); }
  get clothing_type() { return this.entityForm.get('clothing_type'); }
  get plant_type() { return this.entityForm.get('plant_type'); }
  get consumable_type() { return this.entityForm.get('consumable_type'); }
  get durability() { return this.entityForm.get('durability'); }
  get size() { return this.entityForm.get('size'); }
  get special_character_id() { return this.entityForm.get('special_character_id'); }
  get species() { return this.entityForm.get('species'); }
  get personality() { return this.entityForm.get('personality'); }
  get genre() { return this.entityForm.get('genre'); }
  get catchphrase() { return this.entityForm.get('catchphrase'); }
  get birthdate() { return this.entityForm.get('birthdate'); }
}
