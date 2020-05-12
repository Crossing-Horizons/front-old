export class Entity{
    // common
    name: string;
    image: [];
    exchangeable: boolean;

    // fish and bugs
    shadow: string;
    location: string;
    month_northern: string;
    month_southern: string;
    time: string;
    rain: string;
    all_day: boolean;
    all_year: boolean;
    price_cj: number;
    price_flick: number;
    rarity: Rarities;
    museum_phrase: string;

    // other commons
    obtainment: string;
    buy_price: number;
    sell_price: number;
    variants: string;
    recipe: number;

    // plant
    plant_type: Plants;

    // flower
    parent_1: number;
    parent_2: number;

    //consumable
    consumable_type: Consumables;

    // infrastructure
    infrastructure_type: Infrastructures;

    // villager
    specie: Animals;
    personality: Personalities;
    genre: Genre;
    catchphrase: string;
    birthdate: string;

    // event
    date: string;
    npc: number;

    // clothes
    clothing_type: Clothing;

    // tool
    durability: Durabilities;

    // furniture
    furniture_type: Furnitures;
    size: string;
    place_on: boolean;
    interactive: boolean;

    // music
    song: string

    // reaction

    //recipe
    materials: {}

    // achievement
    award_criteria: string;
    num_tiers: number;
    tier1: number;
    tier2: number;
    tier3: number;
    tier4: number;
    tier5: number;
    tier6: number;
    reward_tier1: number;
    reward_tier2: number;
    reward_tier3: number;
    reward_tier4: number;
    reward_tier5: number;
    reward_tier6: number;
}

export enum Type{
    bug = 'bug',
    fish = 'fish', 
    fossil = 'fossil', 
    material = 'material', 
    clothes = 'clothes', 
    furniture = 'furniture', 
    tool = 'tool', 
    plant = 'plant', 
    consumable = 'consumable', 
    villager = 'villager', 
    npc = 'npc', 
    event = 'event', 
    art = 'art', 
    infrastructure = 'infrastructure', 
    flower = 'flower',
    music = 'music', 
    reaction = 'reaction', 
    recipe = 'recipe', 
    achievement = 'achievement'
}

export enum Furnitures{
    house, exterior, fence, hang, floor, wall, rug
}

export enum Infrastructures{
    stairs, bridge
}

export enum Genre{
    male, female
}

export enum Clothing{
    accessory, bag, bottom, dress, headwear, shoes, socks, top, umbrella
}

export enum Plants{
    tree, bush, flower
}

export enum Consumables{
    fruit, vegetables, event, misc
}

export enum Durabilities{
    very_low, low, medium, high, very_high, infinite
}

export enum Rarities{
    common, uncommon, rare, ultra_rare
}

export enum Animals{
    alligator, anteater, bear, bird, bull, cat, chicken, cow, cub, deer, dog, duck, eagle, elephant, frog, goat, gorilla,
    hamster, hippo, horse, kangaroo, koala, lion, mouse, monkey, octopus, ostrich, penguin, pig, rabbit, rhino, sheep, squirrel, 
    tiger, wolf
}

export enum Personalities{
    crancky, jock, lazy, smug, normal, peppy, sisterly, snooty
}