import { Injectable } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Entity } from '../../models/entity'

@Injectable()
export class EntityHelper{
    getEntityFormAttributes(form, type, entity: Entity){
        if(type=='fish'){
            form.addControl('shadow', new FormControl(entity.shadow, [Validators.required]));
            form.addControl('location', new FormControl(entity.location, [Validators.required]));
            form.addControl('month_northern', new FormControl(entity.month_northern, [Validators.required]));
            form.addControl('month_southern', new FormControl(entity.month_southern, [Validators.required]));
            form.addControl('all_day', new FormControl(entity.all_day, [Validators.required]));
            form.addControl('all_year', new FormControl(entity.all_year, [Validators.required]));
            form.addControl('time', new FormControl(entity.time, [Validators.required]));
            form.addControl('museum_phrase', new FormControl(entity.museum_phrase, [Validators.required]));
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('price_cj', new FormControl(entity.price_cj, [Validators.required]));
            form.addControl('rarity', new FormControl(entity.rarity, [Validators.required]));
            //form.setValidators({ validators: this.checkRarity })
            form.get('all_day').setValue(false);
            form.get('all_year').setValue(false);
        } else
        if(type=='bug'){
            form.addControl('location', new FormControl(entity.location, [Validators.required]));
            form.addControl('month_northern', new FormControl(entity.month_northern, [Validators.required]));
            form.addControl('month_southern', new FormControl(entity.month_southern, [Validators.required]));
            form.addControl('all_day', new FormControl(entity.all_day, [Validators.required]));
            form.addControl('all_year', new FormControl(entity.all_year, [Validators.required]));
            form.addControl('time', new FormControl(entity.time, [Validators.required]));
            form.addControl('museum_phrase', new FormControl(entity.museum_phrase, [Validators.required]));
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('price_flick', new FormControl(entity.price_cj, [Validators.required]));
            form.addControl('rarity', new FormControl(entity.rarity, [Validators.required]));
            form.get('all_day').setValue(false);
            form.get('all_year').setValue(false);
        } else
        if(type=='fossil'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
        } else
        if(type=='material'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
        } else
        if(type=='clothes'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
            form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
            form.addControl('clothing_type', new FormControl(entity.clothing_type, [Validators.required]));
        } else
        if(type=='furniture'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
            form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
            form.addControl('size', new FormControl(entity.size, [Validators.required]));
        } else
        if(type=='tool'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
            form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
            form.addControl('durability', new FormControl(entity.durability, [Validators.required]));
        } else
        if(type=='plant'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
            form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
            form.addControl('plant_type', new FormControl(entity.plant_type, [Validators.required]));
        } else
        if(type=='consumable'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
            form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
            form.addControl('consumable_type', new FormControl(entity.consumable_type, [Validators.required]));
        } else
        if(type=='villager'){
            form.addControl('specie', new FormControl(entity.specie, [Validators.required]));
            form.addControl('personality', new FormControl(entity.personality, [Validators.required]));
            form.addControl('genre', new FormControl(entity.genre, [Validators.required]));
            form.addControl('catchphrase', new FormControl(entity.catchphrase, [Validators.required]));
            form.addControl('birthdate', new FormControl(entity.birthdate, [Validators.required]));
        } else
        if(type=='npc'){
            form.addControl('obtainment', new FormControl(entity.obtainment, [Validators.required]));
        } else
        if(type=='event'){
            form.addControl('date', new FormControl(entity.date, [Validators.required]));
            form.addControl('npc', new FormControl(entity.npc, [Validators.required]));
        }
    }

    getEntityDataAttributes(form, type, entity){
        switch(type){
            case 'fish': {
                form.append('shadow', entity.get("shadow").value);
                form.append('location', entity.get("location").value);
                form.append('month_northern', entity.get("month_northern").value);
                form.append('month_southern', entity.get("month_southern").value);
                form.append('all_day', entity.get("all_day").value);
                form.append('all_year', entity.get("all_year").value);
                form.append('time', entity.get("time").value);
                form.append('museum_phrase', entity.get("museum_phrase").value);
                form.append('sell_price', entity.get("sell_price").value);
                form.append('price_cj', entity.get("price_cj").value);
                form.append('rarity', entity.get("rarity").value);
                return form;
            }

            case 'bug': {
                form.append('location', entity.get("location").value);
                form.append('month_northern', entity.get("month_northern").value);
                form.append('month_southern', entity.get("month_southern").value);
                form.append('all_day', entity.get("all_day").value);
                form.append('all_year', entity.get("all_year").value);
                form.append('time', entity.get("time").value);
                form.append('museum_phrase', entity.get("museum_phrase").value);
                form.append('sell_price', entity.get("sell_price").value);
                form.append('price_flick', entity.get("price_flick").value);
                form.append('rarity', entity.get("rarity").value);
                return form;
            }
            case 'fossil': {
                form.append('sell_price', entity.get("sell_price").value);
                return form;
            } 
            case 'material': {
                form.append('sell_price', entity.get("sell_price").value);
                form.append('obtainment', entity.get("obtainment").value);
                return form;
            } 
            case 'clothes':{
                form.append('sell_price', entity.get("sell_price").value);
                form.append('sell_price', entity.get("buy_price").value);
                form.append('obtainment', entity.get("obtainment").value);
                form.append('clothing_type', entity.get("clothing_type").value);
                return form;
            } 
            case 'furniture': {
                form.append('sell_price', entity.get("sell_price").value);
                form.append('buy_price', entity.get("buy_price").value);
                form.append('obtainment', entity.get("obtainment").value);
                form.append('size', entity.get("size").value);
                return form;
            } 
            case 'tool': {
                form.append('sell_price', entity.get("sell_price").value);
                form.append('buy_price', entity.get("buy_price").value);
                form.append('obtainment', entity.get("obtainment").value);
                form.append('durability', entity.get("durability").value);
                return form;
            } 
            case 'plant': {
                form.append('sell_price', entity.get("sell_price").value);
                form.append('buy_price', entity.get("buy_price").value);
                form.append('obtainment', entity.get("obtainment").value);
                form.append('plant_type', entity.get("plant_type").value);
                return form;
            }
            case 'consumable': {
                form.append('sell_price', entity.get("sell_price").value);
                form.append('buy_price', entity.get("buy_price").value);
                form.append('obtainment', entity.get("obtainment").value);
                form.append('consumable_type', entity.get("consumable_type").value);
                return form;
            } 
            case 'villager': {
                form.append('species', entity.get("species").value);
                form.append('personality', entity.get("personality").value);
                form.append('genre', entity.get("genre").value);
                form.append('catchphrase', entity.get("catchphrase").value);
                form.append('birthdate', entity.get("birthdate").value);
                return form;
            } 
            case 'npc': {
                form.append('obtainment', entity.get("obtainment").value);
                return form;
            } 
            case 'event': {
                form.append('date', entity.get("date"));
                form.append('npc', entity.get("npc").value);
                return form;
            }
        }
    }

    getEntityInputsAttributes(param, type){
        switch(type){
            case 'fish': {
                switch(param){
                    case 'shadow': return true
                    case 'location': return true
                    case 'month_northern': return true
                    case 'month_southern': return true
                    case 'all_day': return true
                    case 'all_year': return true
                    case 'time': return true
                    case 'museum_phrase': return true
                    case 'price_cj': return true
                    case 'sell_price': return true
                    case 'rarity': return true
                    default: return false
                }
            }
            case 'bug': {
                switch(param){
                    case 'location': return true
                    case 'month_northern': return true
                    case 'month_southern': return true
                    case 'all_day': return true
                    case 'all_year': return true
                    case 'time': return true
                    case 'museum_phrase': return true
                    case 'price_flick': return true
                    case 'sell_price': return true
                    case 'rarity': return true
                    default: return false
                }
            }
            case 'fossil':{
                switch(param){
                    case 'sell_price': return true
                    default: return false
                }
            }
            case 'material':{
                switch(param){
                    case 'sell_price': return true
                    case 'obtainment': return true
                    default: return false
                }
            }
            case 'clothes':{
                switch(param){
                    case 'sell_price': return true
                    case 'buy_price': return true
                    case 'obtainment': return true
                    case 'clothing_type': true
                    default: return false
                }
            }
            case 'furniture':{
                switch(param){
                    case 'sell_price': return true
                    case 'buy_price': return true
                    case 'obtainment': return true
                    case 'size': return true
                    default: return false
                }
            }
            case 'tool':{
                switch(param){
                    case 'sell_price': return true
                    case 'buy_price': return true
                    case 'obtainment': return true
                    case 'durability': return true
                    default: return false
                }
            }
            case 'plant':{
                switch(param){
                    case 'sell_price': return true
                    case 'buy_price': return true
                    case 'obtainment': return true
                    case 'plant_type': return true
                    default: return false
                }
            }
            case 'consumable':{
                switch(param){
                    case 'sell_price': return true
                    case 'buy_price': return true
                    case 'obtainment': return true
                    case 'consumable_type': return true
                    default: return false
                }
            }
            case 'villager':{
                switch(param){
                    case 'species': return true
                    case 'personality': return true
                    case 'genre': return true
                    case 'catchphrase': return true
                    case 'birthdate': return true
                    default: return false
                }
            }
            case 'npc':{
                switch(param){
                    case 'obtainment': return true
                    default: return false
                }
            }
            case 'event':{
                switch(param){
                    case 'date': return true
                    case 'npc': return true
                    default: return false
                }
            }
        }
    }

    getPropertyTranslated(entity, property, locale, translations){
        const result = translations[locale]
        var propertyTranslated = (typeof result == 'string' && result.length > 0) ? result[0].toUpperCase() + result.substr(1).toLowerCase() : result
        entity[property] = propertyTranslated
    }

    // checkRarity(c: AbstractControl): ValidationErrors | null {
    //     let rarity = c.get(['rarity']);
    
    //     if (Rarities.includes(rarity)) {
    //       c.get(['rarity']).setErrors({wrong_rarity: true})
    //       return { invalid: true };
    //     }
    //     return null;
    //   }
}