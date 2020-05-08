import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'translateType'})
export class EntityTranslatorPipe implements PipeTransform {
    constructor(){}

    /**
     * This pipe is used to obtain the internationalization of a desired entity according to the current language of the page.
     * Usage:
     * 
     * {{ name | translateType: type:locale:variant }}
     * 
     * Example:
     * 
     * {{ "water cool" | translateType: "furniture":"EUes" }}
     * 
     * @param name english name of the entity
     * @param type type of the entity, file where translation is
     * @param locale current user locale
     * @param varian optional param for items with variant type
     */
    
    transform(name: string, type: string, locale: string, variant?: number){
        return this.getNameTranslated(name, type, locale, variant)
    }

    async getNameTranslated(name,  type, locale, variant?){
        var result
        await import('./entity/'+type+'.json').then(res =>{
            var entityJSON = JSON.parse(JSON.stringify(res));
            //We take out the entity that matches the filter(is compared removing whitespaces and in lowercase to avoid many mismatches)
            if(typeof variant != 'undefined'){
                var entityFiltered = entityJSON.default.find(d => (d.furniture_name.replace(/\s+/g, '').toLowerCase() === name.replace(/\s+/g, '').toLowerCase()) 
                    && (d.variant_id.substr(d.variant_id.length-1) == variant))
            } else {
                var entityFiltered = entityJSON.default.find(d => d.locale.EUen.replace(/\s+/g, '').toLowerCase() === name.replace(/\s+/g, '').toLowerCase())
            }
            result = entityFiltered.locale[locale];
        })
        return (typeof result == 'string' && result.length > 0) ? result[0].toUpperCase() + result.substr(1).toLowerCase() : result;
    }
}
