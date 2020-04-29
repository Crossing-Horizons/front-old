export class Entity{
    //common
    english_name: string;
    spanish_name: string;
    description: string;
    image: string;
    exchangeable: boolean;

    // fish and bugs
    shadow: string;
    location: string;
    month_northern: string;
    month_southern: string;
    time: string;
    all_day: boolean;
    all_year: boolean;
    price_cj: number;
    price_flick: number;
    rarity: Rarities;
    museum_phrase: string;

    // other
    obtainment: string;
    buy_price: number;
    sell_price: number;
    date: string;
    clothing_type: Clothing;
    plant_type: Plants;
    consumable_type: Consumables;
    durability: Durabilities;
    size: string;
    special_character_id: number;

    // vilager
    species: Animals;
    personality: string;
    genre: Genre;
    catchphrase: string;
    birthdate: string;
}

const enum Type{
    bug, fish, fossil, material, clothes, furniture, tool, plant, consumable, villager, special_special_character_id, event
}

export const enum Genre{
    male, female
}

export const enum Clothing{
    accessory, bag, bottom, dress, headwear, shoes, socks, top, umbrella
}

export const enum Plants{
    tree, flower
}

export const enum Consumables{
    fruit, vegetables, misc
}

export const enum Durabilities{
    low, medium, high, very_high, infinite
}

export const enum Rarities{
    common, uncommon, rare, ultra_rare
}

export const enum Animals{
    alligator, anteater, bear, bird, bull, cat, chicken, cow, cub, deer, dog, duck, eagle, elephant, frog, goat, gorilla,
    hamster, hippo, horse, kangaroo, koala, lion, mouse, monkey, octopus, ostrich, penguin, pig, rabbit, rhino, sheep, squirrel, 
    tiger, wolf
}

export const enum Personalities{
    crancky, jock, lazy, smug, normal, peppy, sisterly, snooty
}