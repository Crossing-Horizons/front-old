import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

import { UploadService } from '../../../services/config/upload.service';
import { EntityService } from '../../../services/entity/entity.service';

import { EntityHelper } from '../entity-helper';
import { Entity } from '../../../models/entity';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, public entityHelper: EntityHelper, private uploadService: UploadService, 
    private entityService: EntityService) { }

  selectedFiles: FileList;
  imgPreview;
  submitAttemp: boolean;
  type: string;
  entity = new Entity();


  entityForm = new FormGroup({
    english_name: new FormControl(this.entity.english_name, [Validators.required]),
    spanish_name: new FormControl(this.entity.spanish_name, [Validators.required]),
    description: new FormControl(this.entity.description, [Validators.required]),
    image: new FormControl(this.entity.exchangeable, [Validators.required]),
    exchangeable: new FormControl(this.entity.exchangeable, [Validators.required])
  });

  ngOnInit(): void {
    // set checkboxes false by default
    this.entityForm.get('exchangeable').setValue(false)
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.entityHelper.getEntityFormAttributes(this.entityForm, this.type, this.entity);
    });
  }

  onSubmit() {
    if(!this.entityForm.invalid){
      var form = new FormData();
      form.append("english_name",this.entityForm.get('english_name').value)
      form.append("spanish_name",this.entityForm.get('spanish_name').value)
      form.append("description",this.entityForm.get('description').value)
      form.append("exchangeable",this.entityForm.get('exchangeable').value)
      form.append("image", this.selectedFiles.item(0))
      form = this.entityHelper.getEntityDataAttributes(form, this.type, this.entityForm)
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
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imgPreview = event.target.result;
      }
    }
  }

  get english_name() { return this.entityForm.get('english_name'); }
  get spanish_name() { return this.entityForm.get('spanish_name'); }
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
