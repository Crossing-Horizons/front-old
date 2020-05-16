import { Component, OnInit, OnChanges, ViewChild ,Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

import { EntityService } from '../../../services/entity/entity.service';

import { EntityHelper } from '../entity-helper';
import { Rarities, Shadows, Consumables, Infrastructures, Personalities, Animals, Genre } from '../../../models/entity';


@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityFormComponent implements OnInit, OnChanges {
  @Input() type: string;
  @Input() entityForm: FormGroup;
  @Input() content
  @Input() submitAttemp: boolean;

  constructor(private route: ActivatedRoute, public entityHelper: EntityHelper, private entityService: EntityService) { }

  selectedFiles: FileList;
  imgPreview;
  creating: boolean = this.route.snapshot.data['creating']

  // Enums
  rarities = Object.values(Rarities)
  shadows = Object.values(Shadows)
  consumables = Object.values(Consumables)
  infrastructures = Object.values(Infrastructures)
  genres = Object.values(Genre)
  species = Object.values(Animals)
  personalities = Object.values(Personalities)
  
  ngOnInit(): void {
  }

  ngOnChanges(){
    this.submitAttemp=false;
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.entityForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
}

  onSubmit() {
    console.log(this.findInvalidControls())
    if(!this.entityForm.invalid){
      var form = new FormData();
      form.append('creating', new Boolean(this.creating).toString())
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const file = this.selectedFiles[i];
        form.append("image", file);
      }
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
  get npc() { return this.entityForm.get('npc'); }
  get specie() { return this.entityForm.get('specie'); }
  get personality() { return this.entityForm.get('personality'); }
  get genre() { return this.entityForm.get('genre'); }
  get catchphrase() { return this.entityForm.get('catchphrase'); }
  get birthdate() { return this.entityForm.get('birthdate'); }
  get rain() { return this.entityForm.get('rain'); }
  get infrastructure_type() { return this.entityForm.get('infrastructure_type'); }
}
