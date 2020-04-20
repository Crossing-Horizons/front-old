import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Injectable()
export class EntityHelper{

    getEntityAttributes(form, type, entity){
        if(type=='fish'){
            form.addControl('size', new FormControl(entity.size, [Validators.required]));
            form.addControl('place', new FormControl(entity.place, [Validators.required]));
            form.addControl('date', new FormControl(entity.date, [Validators.required]));
            form.addControl('time', new FormControl(entity.time, [Validators.required]));
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('rarity', new FormControl(entity.rarity, [Validators.required]));
        } else
        if(type=='insect'){
            form.addControl('place', new FormControl(entity.place, [Validators.required]));
            form.addControl('date', new FormControl(entity.date, [Validators.required]));
            form.addControl('time', new FormControl(entity.time, [Validators.required]));
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('rarity', new FormControl(entity.rarity, [Validators.required]));
        } else
        if(type=='fossil'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
        } else
        if(type=='material'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('obtaining', new FormControl(entity.obtaining, [Validators.required]));
        } else
        if(type=='clothing'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
            form.addControl('obtaining', new FormControl(entity.obtaining, [Validators.required]));
            form.addControl('clothing_type', new FormControl(entity.clothing_type, [Validators.required]));
        } else
        if(type=='warehouse'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
            form.addControl('obtaining', new FormControl(entity.obtaining, [Validators.required]));
            form.addControl('size', new FormControl(entity.size, [Validators.required]));
        } else
        if(type=='warehouse'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
            form.addControl('obtaining', new FormControl(entity.obtaining, [Validators.required]));
        } else
        if(type=='plant'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
            form.addControl('obtaining', new FormControl(entity.obtaining, [Validators.required]));
            form.addControl('plant_type', new FormControl(entity.plant_type, [Validators.required]));
        } else
        if(type=='consumable'){
            form.addControl('sell_price', new FormControl(entity.sell_price, [Validators.required]));
            form.addControl('buy_price', new FormControl(entity.buy_price, [Validators.required]));
            form.addControl('obtaining', new FormControl(entity.obtaining, [Validators.required]));
        } else
        if(type=='neighbor'){
            form.addControl('animal_type', new FormControl(entity.animal_type, [Validators.required]));
            form.addControl('personality', new FormControl(entity.personality, [Validators.required]));
            form.addControl('genre', new FormControl(entity.genre, [Validators.required]));
            form.addControl('slogan', new FormControl(entity.slogan, [Validators.required]));
            form.addControl('catchphrase', new FormControl(entity.catchphrase, [Validators.required]));
            form.addControl('birthdate', new FormControl(entity.birthdate, [Validators.required]));
        } else
        if(type=='character'){
            form.addControl('obtaining', new FormControl(entity.obtaining, [Validators.required]));
        } else
        if(type=='event'){
            form.addControl('date', new FormControl(entity.date, [Validators.required]));
            form.addControl('character', new FormControl(entity.character, [Validators.required]));
        }
    }

    getEntityInputs(param, type){
        switch(type){
            case 'fish': {
                switch(param){
                    case 'size': return true
                    case 'place': return true
                    case 'date': return true
                    case 'time': return true
                    case 'sell_price': return true
                    case 'rarity': return true
                    default: return false
                }
            }
            case 'insect': {
                switch(param){
                    case 'place': return true
                    case 'date': return true
                    case 'time': return true
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
                    case 'obtaining': return true
                    default: return false
                }
            }
            case 'clothing':{
                switch(param){
                    case 'sell_price': return true
                    case 'buy_price': return true
                    case 'obtaining': return true
                    case 'clothing_type': true
                    default: false
                }
            }
            case 'warehouse':{
                switch(param){
                    case 'sell_price': return true
                    case 'buy_price': return true
                    case 'obtaining': return true
                    case 'size': return true
                    default: return false
                }
            }
            case 'tool':{
                switch(param){
                    case 'sell_price': return true
                    case 'buy_price': return true
                    case 'obtaining': return true
                    default: return false
                }
            }
            case 'plant':{
                switch(param){
                    case 'sell_price': return true
                    case 'buy_price': return true
                    case 'obtaining': return true
                    case 'plant_type': return true
                    default: return false
                }
            }
            case 'consumable':{
                switch(param){
                    case 'sell_price': return true
                    case 'buy_price': return true
                    case 'obtaining': return true
                    default: return false
                }
            }
            case 'neighbor':{
                switch(param){
                    case 'animal_type': return true
                    case 'personality': return true
                    case 'genre': return true
                    case 'slogan': return true
                    case 'catchphrase': return true
                    case 'birthdate': return true
                    default: return false
                }
            }
            case 'character':{
                switch(param){
                    case 'obtaining': return true
                    default: return false
                }
            }
            case 'event':{
                switch(param){
                    case 'date': return true
                    case 'character': return true
                    default: return false
                }
            }
        }
    }
}