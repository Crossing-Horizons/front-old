/*

Vas a tener que modificar mucho y pelearte bastante aviso, yo solo he estructurado una idea inicial para que empieces a ver
el planteamiento

englishName es la propiedad name de una entity en base de datos 

entityType puede ser: {'accesories','arts','bags','bottoms','bridgeslopes','bugs','bugmodels','caps'..... etc, así con todos los JSONs}

nameSearched puede ser: {"USen","EUen","EUde", "EUes"","USes","EUfr","USfr","EUit","EUnl","CNzh","TWzh","JPja","KRko","EUru"}

searchVariants es un boolean
*/ 

function translate_from_entity(englishName , entityType , nameSearched, searchVariants ){
    var fs = require('fs');
    var jmespath = require('jmespath');
    //A partir de entityType, seleccionamos qué JSON queremos y lo sacamos
    const jsonString = fs.readFileSync('utils/translation/entity/' + entityType + '.json', 'utf8');
    var entitities = JSON.parse(jsonString);

    //We take out the entity that matches the filter(is compared removing whitespaces and in lowercase to avoid many mismatches)
    var entityFiltered = entityJSON.find(d => d.locale.EUen.replace(/\s+/g, '').toLowerCase() === englishName.replace(/\s+/g, '').toLowerCase() )
    //var entities_filtered_length = jmespath.search(entities_filtered, 'length([*])') ;
    
    var name = entityFiltered.locale[nameSearched];//Esta línea no sé si funcionará, espero que sí

    //Depending on searchVariants boolean value, will search for Variants or not
    if(searchVariants){
    //Casuística para un mueble, no sé como será para la ropa o en qué JSON estará, no he parado a mirar detenidamente
        const jsonStringVariants = fs.readFileSync('utils/translation/entity/variants.json', 'utf8');
        var variants = JSON.parse(jsonStringVariants);
        var entity_variants = entityFiltered = variants.filter(d => d.furniture_name.replace(/\s+/g, '').toLowerCase() === englishName.replace(/\s+/g, '').toLowerCase() )
        entity_variants_names = jmespath.search(entity_variants, '[*].locale.' +nameSearched ) //esto coge la lista de los filtrados y deja solo el nombre en el idioma pasado como parámetro
        return [name, entity_variants_names] //Devolvemos una lista con el nombre y las variantes buscadas de un mueble.

    }else{
        //If we only were looking for a concrete translation, we return the name translated
        return name;
    }


}