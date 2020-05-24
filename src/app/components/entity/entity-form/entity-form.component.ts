import { Component, OnInit, OnChanges, ViewChild ,Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

import { EntityService } from '../../../services/entity/entity.service';
import { EntityHelper } from '../entity-helper';
import { Rarities, Shadows, Consumables, constructions, Personalities, Animals, Genre, 
  Durabilities, Furnitures, Plants, Clothing, Styles, Themes, Seasons } from '../../../models/entity';
import { FormUtilities } from '../../../utils/form-utilities'


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

  constructor(private route: ActivatedRoute, public entityHelper: EntityHelper, private entityService: EntityService,
    public formUtilities: FormUtilities) { }

  selectedImage: File;
  imgPreview: any;
  selectedVariants: FileList;
  variantsPreview = [];
  
  creating: boolean = this.route.snapshot.data['creating']

  // Enums
  rarities = Object.values(Rarities)
  shadows = Object.values(Shadows)
  consumables = Object.values(Consumables)
  constructions = Object.values(constructions)
  genres = Object.values(Genre)
  species = Object.values(Animals)
  personalities = Object.values(Personalities)
  durabilities = Object.values(Durabilities)
  furnitures = Object.values(Furnitures)
  plants = Object.values(Plants)
  clothes = Object.values(Clothing)
  styles = Object.values(Styles)
  themeList = Object.values(Themes)
  seasonList = Object.values(Seasons)

  materialList = []
  musicList = []
  
  ngOnInit(): void {
    // this.entityService.list(type).then(res => {
    //   this.materialList.push(res);
    // });
  }

  ngOnChanges(){

    this.submitAttemp=false;
    this.selectedImage=null;
    this.imgPreview=[];
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
      form.append("image", this.selectedImage);
      form = this.entityHelper.getEntityDataAttributes(form, this.type, this.entityForm, this.selectedVariants)
      this.entityService.create(form).catch(error => {
        console.log(error);
      });

    } else {
      this.submitAttemp = true;
    }
  }
    
  selectImage(event) {
    this.selectedImage = event.target.files;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.imgPreview = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        this.imgPreview = reader.result;
      }
    } else {
      this.imgPreview = null;
    }
  }

  selectVariants(event) {
    this.selectedVariants = event.target.files;
    if (event.target.files && event.target.files[0]) {
      this.variantsPreview = []
      for(let file of event.target.files){
          let reader = new FileReader();
          reader.onload = (e: any) => {
            this.variantsPreview.push(reader.result);
          }
          reader.readAsDataURL(file);
        }
      } else {
        this.variantsPreview = null;
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
  get construction_type() { return this.entityForm.get('construction_type'); }
  get tiers() { return this.entityForm.get('tiers'); }
  get award_criteria() { return this.entityForm.get('award_criteria'); }
  get materials() { return this.entityForm.get('materials'); }
  get furniture_type() { return this.entityForm.get('furniture_type'); }
  get variants() { return this.entityForm.get('variants'); }
  get style() { return this.entityForm.get('style'); }
  get themes() { return this.entityForm.get('themes'); }
  get always_available() { return this.entityForm.get('always_available'); }
  get seasons() { return this.entityForm.get('seasons'); }
  get favorite_music() { return this.entityForm.get('favorite_music'); }
  get interactive() { return this.entityForm.get('interactive'); }
  get place_on() { return this.entityForm.get('place_on'); }
}
