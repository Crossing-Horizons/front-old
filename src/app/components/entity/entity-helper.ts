import { Injectable } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormBuilder, ValidatorFn } from '@angular/forms';
import { Entity, Rarities, Shadows } from '../../models/entity'
import { FormUtilities } from '../../utils/form-utilities'

@Injectable()
export class EntityHelper{

    constructor(private formUtilities: FormUtilities, private formBuilder: FormBuilder){}
    /**
     * Creates the FormGroup according to the entity type
     * @param form 
     * @param type 
     * @param entity 
     */
    getEntityFormAttributes(form, type, entity: Entity){
        this.translationFormAttributes(form, entity);
        form.addControl('name', new FormControl(entity.name, [Validators.required]));
        form.addControl('exchangeable', new FormControl(entity.exchangeable, [Validators.required]));
        form.addControl('image', new FormControl(entity.image, [Validators.required]));
        form.get('exchangeable').setValue(false);

        switch(type){
            case 'fish': {
                this.bugAndFishCommonFormAttributes(form, entity);
                form.addControl('shadow', new FormControl(entity.shadow, [this.checkEnumerate(Object.values(Shadows))]));
                form.addControl('price_cj', new FormControl(entity.price_cj, [Validators.required]));
                return form;
            }
            case 'bug': {
                this.bugAndFishCommonFormAttributes(form, entity);
                form.addControl('price_flick', new FormControl(entity.price_flick, [Validators.required]));
                return form;
            }
            case 'fossil': {
                form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
                form.addControl('museum_phrase', new FormControl(entity.museum_phrase, [Validators.required]));
                return form;
            }
            case 'art': {
                this.priceCommonFormAttributes(form, entity);
                form.addControl('museum_phrase', new FormControl(entity.museum_phrase, [Validators.required]));
                return form;
            }
            case 'material': {
                form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
                form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
                return form;              
            }
            case 'clothes': {
                this.priceCommonFormAttributes(form, entity);
                form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
                form.addControl('clothing_type', new FormControl(entity.clothing_type, [Validators.required]));
                form.addControl('always_available', new FormControl(entity.always_available, [Validators.required]));
                form.addControl('style', new FormControl(entity.style, [Validators.required]));
                form.addControl('themes', new FormControl(entity.themes, [Validators.required]));
                form.addControl('seasons', new FormControl(entity.seasons, [Validators.required]));
                form.addControl('variants', new FormControl(entity.variants));
                form.get('always_available').setValue(false)
                return form;
            }
            case 'furniture': {
                this.priceCommonFormAttributes(form, entity);
                form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
                form.addControl('size', new FormControl(entity.size, [Validators.required]));
                form.addControl('furniture_type', new FormControl(entity.furniture_type, [Validators.required]));
                form.addControl('variants', new FormControl(entity.variants));
                form.addControl('interactive', new FormControl(entity.interactive));
                form.addControl('tag', new FormControl(entity.tag));
                form.addControl('series', new FormControl(entity.series));
                form.addControl('set', new FormControl(entity.set));
                form.get('interactive').setValue(false);
                return form;
            }
            case 'tool': {
                this.priceCommonFormAttributes(form, entity);
                form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
                form.addControl('durability', new FormControl(entity.durability, [Validators.required]));
                form.addControl('variants', new FormControl(entity.variants));
                return form;                
            }
            case 'plant': {
                this.priceCommonFormAttributes(form, entity);
                form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
                form.addControl('plant_type', new FormControl(entity.plant_type, [Validators.required]));
                form.addControl('rarity', new FormControl(entity.rarity));
                // TODO Revisar los padres de las hibridas
                // form.addControl('parent_1', new FormControl(entity.parent_1));
                // form.addControl('parent_2', new FormControl(entity.parent_2));
                return form;
            }
            case 'consumable': {
                this.priceCommonFormAttributes(form, entity);
                form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
                form.addControl('consumable_type', new FormControl(entity.consumable_type, [Validators.required]));
                return form
            }
            case 'villager': {
                form.addControl('specie', new FormControl(entity.specie, [Validators.required]));
                form.addControl('personality', new FormControl(entity.personality, [Validators.required]));
                form.addControl('gender', new FormControl(entity.gender, [Validators.required]));
                form.addControl('catchphrase', new FormControl(entity.catchphrase, [Validators.required]));
                form.addControl('birthday', new FormControl(entity.birthday, [Validators.required]));
                form.addControl('favorite_music', new FormControl(entity.favorite_music, [Validators.required]));
                form.get('gender').setValue('male')
                return form;
            }
            case 'npc': {
                form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
                form.addControl('birthday', new FormControl(entity.birthday, [Validators.required]));
                return form;
            }
            case 'event': {
                form.addControl('date', new FormControl(entity.date, [Validators.required]));
                form.addControl('npc', new FormControl(entity.npc, [Validators.required]));
                return form;
            }
            case 'construction': {
                form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
                form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
                form.addControl('construction_type', new FormControl(entity.construction_type, [Validators.required]));
                return form;
            }
            case 'reaction': {
                form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
                return form;
            }
            case 'recipe': {
                this.priceCommonFormAttributes(form, entity);
                form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
                this.formUtilities.dynamicInput(form, 'materials', this.initRecipeMaterialInput());
                return form
            }
            case 'achievement': {
                form.addControl('award_criteria', new FormControl(entity.award_criteria, [Validators.required]));
                this.formUtilities.dynamicInput(form, 'tiers', this.initTierInput());
                return form
            }
            case 'music': {
                this.priceCommonFormAttributes(form, entity);
                form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
                return form
            }
        }
    }

    /**
     * Generates the FormData according to the entity type
     * @param form 
     * @param type 
     * @param entity 
     */
    getEntityDataAttributes(form, type, entityForm, selectedVariants){
        this.translationDataAttributes(form, entityForm);
        form.append("name", entityForm.get('name').value)
        form.append("exchangeable", entityForm.get('exchangeable').value)
        form.append("type", type)
        switch(type){
            case 'fish': {
                this.bugAndFishCommonDataAttributes(form, entityForm);
                form.append('shadow', entityForm.get("shadow").value);
                form.append('price_cj', entityForm.get("price_cj").value);
                return form;
            }
            case 'bug': {
                this.bugAndFishCommonDataAttributes(form, entityForm);
                form.append('price_flick', entityForm.get("price_flick").value);
                return form;
            }
            case 'fossil': {
                form.append('sell_price', entityForm.get("sell_price").value);
                form.append('museum_phrase', entityForm.get("museum_phrase").value);
                return form;
            } 
            case 'art': {
                this.priceCommonDataAttributes(form, entityForm);
                form.append('museum_phrase', entityForm.get("museum_phrase").value);
                return form;
            } 
            case 'material': {
                form.append('sell_price', entityForm.get("sell_price").value);
                form.append('obtainment', entityForm.get("obtainment").value);
                return form;
            } 
            case 'clothes':{
                this.priceCommonDataAttributes(form, entityForm);
                form.append('obtainment', entityForm.get("obtainment").value);
                form.append('clothing_type', entityForm.get("clothing_type").value);
                form.append('always_available', entityForm.get("always_available").value);
                form.append('style', entityForm.get("style").value);
                form.append('themes', entityForm.get("themes").value);
                form.append('seasons', entityForm.get("seasons").value);
                form.append('variants', selectedVariants);
                return form;
            } 
            case 'furniture': {
                this.priceCommonDataAttributes(form, entityForm);
                form.append('obtainment', entityForm.get("obtainment").value);
                form.append('size', entityForm.get("size").value);
                form.append('variants', selectedVariants);
                form.append('interactive', entityForm.get("interactive").value);
                form.append('tag', entityForm.get("tag").value);
                form.append('series', entityForm.get("series").value);
                form.append('set', entityForm.get("set").value);
                return form;
            } 
            case 'tool': {
                this.priceCommonDataAttributes(form, entityForm);
                form.append('obtainment', entityForm.get("obtainment").value);
                form.append('durability', entityForm.get("durability").value);
                form.append('variants', selectedVariants);
                return form;
            } 
            case 'plant': {
                this.priceCommonDataAttributes(form, entityForm);
                form.append('obtainment', entityForm.get("obtainment").value);
                form.append('plant_type', entityForm.get("plant_type").value);
                return form;
            }
            case 'consumable': {
                this.priceCommonDataAttributes(form, entityForm);
                form.append('obtainment', entityForm.get("obtainment").value);
                form.append('consumable_type', entityForm.get("consumable_type").value);
                return form;
            } 
            case 'villager': {
                form.append('specie', entityForm.get("specie").value);
                form.append('personality', entityForm.get("personality").value);
                form.append('gender', entityForm.get("gender").value);
                form.append('catchphrase', entityForm.get("catchphrase").value);
                form.append('birthday', entityForm.get("birthday").value);
                form.append('favorite_music', entityForm.get("favorite_music").value);
                return form;
            } 
            case 'npc': {
                form.append('obtainment', entityForm.get("obtainment").value);
                form.append('birthday', entityForm.get("birthday").value);
                return form;
            } 
            case 'event': {
                form.append('date', entityForm.get("date"));
                form.append('npc', entityForm.get("npc").value);
                return form;
            }
            case 'construction': {
                form.append('buy_price', entityForm.get("buy_price"));
                form.append('obtainment', entityForm.get("obtainment").value);
                form.append('construction_type', entityForm.get("construction_type").value);
                return form;
            }
            case 'reaction': {
                form.append('obtainment', entityForm.get("obtainment").value);
                return form;
            }
            case 'recipe': {
                this.priceCommonDataAttributes(form, entityForm);
                form.append('obtainment', entityForm.get("obtainment").value);
                form.append('recipeMaterials', entityForm.get("materials").value);
                return form;
            }
            case 'achievement': {
                form.append('award_criteria', entityForm.get("award_criteria").value);
                form.append('tiers', entityForm.get("tiers").value)
                return form;
            }
            case 'music': {
                this.priceCommonDataAttributes(form, entityForm);
                form.append('obtainment', entityForm.get("obtainment").value);
                return form;
            }
        }
    }

    /**
     * 
     * @param entity 
     * @param property 
     * @param locale 
     * @param translations 
     */
    getPropertyTranslated(entity, property, locale){
        const result = entity.translations[locale]
        var propertyTranslated = (typeof result == 'string' && result.length > 0) ? result[0].toUpperCase() + result.substr(1).toLowerCase() : result
        entity[property] = propertyTranslated
    }

    checkEnumerate(enumerate): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            const result = !enumerate.includes(control.value);
            return result ? {'wrong_option': {value: control.value}} : null;
        };
    }

    clickTime(entityForm){
        if(entityForm.value.all_day){
          entityForm.get('time').setValidators([Validators.required, Validators.pattern("[0-1]?[0-9][aApP][mM]-[0-1]?[0-9][aApP][mM]")]);
        }else{
          entityForm.get('time').clearValidators();
        }
        entityForm.get('time').updateValueAndValidity();
    }
    
    clickMonths(entityForm){
        if(entityForm.value.all_year){
            entityForm.get('month_northern').setValidators([Validators.required, Validators.pattern("[1]?[0-9](-[1]?[0-9])?( && [1]?[0-9]-[1]?[0-9])?")]);
            entityForm.get('month_southern').setValidators([Validators.required, Validators.pattern("[1]?[0-9](-[1]?[0-9])?( && [1]?[0-9]-[1]?[0-9])?")]);
        }else{
            entityForm.get('month_northern').clearValidators();
            entityForm.get('month_southern').clearValidators();
        }
        entityForm.get('month_northern').updateValueAndValidity();
        entityForm.get('month_southern').updateValueAndValidity();
    }

    clickSeasons(entityForm){
        if(entityForm.value.always_available){
            entityForm.get('seasons').enable();
            entityForm.get('seasons').setValidators([Validators.required]);
          
        }else{
            entityForm.get('seasons').disable();
            entityForm.get('seasons').clearValidators();
        }
        entityForm.get('seasons').updateValueAndValidity();
    }

    private bugAndFishCommonFormAttributes(form, entity){
        form.addControl('location', new FormControl(entity.location, [Validators.required]));
        form.addControl('month_northern', new FormControl(entity.month_northern, [Validators.required]));
        form.addControl('month_southern', new FormControl(entity.month_southern, [Validators.required]));
        form.addControl('all_day', new FormControl(entity.all_day, [Validators.required]));
        form.addControl('all_year', new FormControl(entity.all_year, [Validators.required]));
        form.addControl('time', new FormControl(entity.time, [Validators.required]));
        form.addControl('museum_phrase', new FormControl(entity.museum_phrase, [Validators.required]));
        form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
        form.addControl('rarity', new FormControl(entity.rarity, [this.checkEnumerate(Object.values(Rarities))]));
        form.addControl('rain', new FormControl(entity.rain, [Validators.required]));
        form.get('rain').setValue(0)
        form.get('all_day').setValue(false);
        form.get('all_year').setValue(false);
    }

    private bugAndFishCommonDataAttributes(form, entityForm){
        form.append('location', entityForm.get("location").value);
        form.append('month_northern', entityForm.get("month_northern").value);
        form.append('month_southern', entityForm.get("month_southern").value);
        form.append('all_day', entityForm.get("all_day").value);
        form.append('all_year', entityForm.get("all_year").value);
        form.append('time', entityForm.get("time").value);
        form.append('museum_phrase', entityForm.get("museum_phrase").value);
        form.append('sell_price', entityForm.get("sell_price").value);
        form.append('rarity', entityForm.get("rarity").value);
        form.append('rain', entityForm.get("rain").value);
    }

    private priceCommonFormAttributes(form, entity){
        form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
        form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
    }

    private priceCommonDataAttributes(form, entityForm){
        form.append('sell_price', entityForm.get("sell_price").value);
        form.append('buy_price', entityForm.get("buy_price").value);
    }

    private translationFormAttributes(form, entity){
        form.addControl('USen', new FormControl(entity.translations ? entity.translations.USen : null));
        form.addControl('EUde', new FormControl(entity.translations ? entity.translations.EUde : null));
        form.addControl('EUes', new FormControl(entity.translations ? entity.translations.EUes : null));
        form.addControl('USes', new FormControl(entity.translations ? entity.translations.USes : null));
        form.addControl('EUfr', new FormControl(entity.translations ? entity.translations.EUfr : null));
        form.addControl('USfr', new FormControl(entity.translations ? entity.translations.USfr : null));
        form.addControl('EUit', new FormControl(entity.translations ? entity.translations.EUit : null));
        form.addControl('EUnl', new FormControl(entity.translations ? entity.translations.EUnl : null));
        form.addControl('CNzh', new FormControl(entity.translations ? entity.translations.CNzh : null));
        form.addControl('TWzh', new FormControl(entity.translations ? entity.translations.TWzh : null));
        form.addControl('JPja', new FormControl(entity.translations ? entity.translations.JPja : null));
        form.addControl('KRko', new FormControl(entity.translations ? entity.translations.KRko : null));
        form.addControl('EUru', new FormControl(entity.translations ? entity.translations.EUru : null));
    }

    private translationDataAttributes(form, entityForm){
        form.append('EUen', entityForm.get('name').value);
        form.append('USen', entityForm.get('USen').value);
        form.append('EUde', entityForm.get('EUde').value);
        form.append('EUes', entityForm.get('EUes').value);
        form.append('USes', entityForm.get('USes').value);
        form.append('EUfr', entityForm.get('EUfr').value);
        form.append('USfr', entityForm.get('USfr').value);
        form.append('EUit', entityForm.get('EUit').value);
        form.append('EUnl', entityForm.get('EUnl').value);
        form.append('CNzh', entityForm.get('CNzh').value);
        form.append('TWzh', entityForm.get('TWzh').value);
        form.append('JPja', entityForm.get('JPja').value);
        form.append('KRko', entityForm.get('KRko').value);
        form.append('EUru', entityForm.get('EUru').value);
    }

    public initTierInput(){
        return this.formBuilder.group({
            tier: ['', Validators.required],
            reward_tier: ['', Validators.required]
        });
    }

    public initRecipeMaterialInput(){
        return this.formBuilder.group({
            material: [null, Validators.required],
            quantity: [null, Validators.required]
        });
    }

    public birthdayIcon(birthday){
        var day = birthday.split("/")[0]
        var month = birthday.split("/")[1]
        if((month == '3' && day >='21') || (month == '4' && day <='20')){
            return 'aries'
        }
        if((month == '4' && day >='21') || (month == '5' && day <='20')){
            return 'taurus'
        }
        if((month == '5' && day >='21') || (month == '6' && day <='20')){
            return 'gemini'
        }
        if((month == '6' && day >='21') || (month == '7' && day <='20')){
            return 'cancer'
        }
        if((month == '7' && day >='23') || (month == '8' && day <='21')){
            return 'leo'
        }
        if((month == '8' && day >='22') || (month == '9' && day <='22')){
            return 'virgo'
        }
        if((month == '9' && day >='23') || (month == '10' && day <='22')){
            return 'libra'
        }
        if((month == '10' && day >='23') || (month == '11' && day <='22')){
            return 'scorpio'
        }
        if((month == '11' && day >='23') || (month == '12' && day <='21')){
            return 'sagittarius'
        }
        if((month == '12' && day >='21') || (month == '1' && day <='19')){
            return 'capricorn'
        }
        if((month == '1' && day >='20') || (month == '2' && day <='18')){
            return 'aquarius'
        }
        if((month == '2' && day >='19') || (month == '3' && day <='20')){
            return 'pisces'
        }
    }
    public buyPriceIcon(type, obtainment){
        if(type=='construction'){
            return "https://crossing-horizons-images.s3.eu-west-3.amazonaws.com/npc/rco.png"
        }
        if(type=='music'){
            return "https://crossing-horizons-images.s3.eu-west-3.amazonaws.com/utils/NookShopping.png"
        }
        return "https://crossing-horizons-images.s3.eu-west-3.amazonaws.com/utils/Coin.png"
    }
}