export class Entity{
    // common
    name: string;
    image: [];
    exchangeable: boolean;

    // fish and bugs
    shadow: Shadows;
    location: string;
    month_northern: string;
    month_southern: string;
    time: string;
    rain: number;
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
    variants: [];
    recipe: number;

    // plant
    plant_type: Plants;

    // flower
    parent_1: number;
    parent_2: number;

    //consumable
    consumable_type: Consumables;

    // construction
    construction_type: constructions;

    // villager
    specie: Animals;
    personality: Personalities;
    genre: Genre;
    catchphrase: string;
    birthdate: string;
    favorite_music: number;

    // event
    date: string;
    npc: number;

    // clothes
    clothing_type: Clothing;
    seasons: Array<Seasons>;
    themes: Array<Themes>;
    style: Styles;
    always_available: boolean;

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

    translations: {
        EUen: string;
        USen: string;
        EUde: string;
        EUes: string;
        USes: string;
        EUfr: string;
        USfr: string;
        EUit: string;
        EUnl: string;
        CNzh: string;
        TWzh: string;
        JPja: string;
        KRko: string;
        EUru: string;
    }
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
    construction = 'construction',
    music = 'music', 
    reaction = 'reaction', 
    recipe = 'recipe', 
    achievement = 'achievement'
}

export enum Furnitures{
    house = 'house', 
    exterior = 'exterior', 
    fence = 'fence', 
    hang = 'hang', 
    floor = 'floor', 
    wall = 'wall', 
    rug = 'rug'
}

export enum constructions{
    incline = 'incline', 
    bridge = 'bridge',
    mailbox = 'mailbox',
    siding = 'siding',
    door = 'door',
    roofing = 'roofing'
}

export enum Seasons{
    spring = 'spring', 
    summer = 'summer',
    autumn = 'autumn',
    winter = 'winter'
}

export enum Themes{
    comfy = 'comfy',
    everyday = 'everyday',
    formal = 'formal', 
    outdoorsy = 'outdoorsy',
    theatrical = 'theatrical',
    vacation = 'vacation',
    work = 'work',
    party = 'party',
    fairy_tale = 'fairy_tale',
    sporty = 'sporty',
    ghotic = 'ghotic'
}

export enum Styles{
    cool = 'cool',
    simple = 'simple',
    georgeuos = 'georgeuos', 
    active = 'active',
    cute = 'cute',
    elegant = 'elegant'
}

export enum Genre{
    male = 'male', 
    female = 'female'
}

export enum Clothing{
    accessory = 'accessory', 
    bag = 'bag', 
    bottom = 'bottom', 
    dress = 'dress', 
    headwear = 'headwear', 
    shoes = 'shoes', 
    socks = 'socks', 
    top = 'top', 
    umbrella = 'umbrella'
}

export enum Plants{
    tree = 'tree', 
    bush = 'bush', 
    flower = 'flower'
}

export enum Consumables{
    fruit = 'fruit', 
    vegetable = 'vegetable', 
    event = 'event', 
    misc = 'misc'
}

export enum Durabilities{
    very_low = 'very_low', 
    low = 'low', 
    medium = 'medium', 
    high = 'high', 
    very_high = 'very_high', 
    infinite = 'infinite'
}

export enum Rarities{
    common = 'common', 
    uncommon = 'uncommon', 
    rare = 'rare', 
    ultra_rare = 'ultra_rare'
}

export enum Animals{
    alligator = 'alligator', 
    anteater = 'anteater', 
    bear = 'bear', 
    bird = 'bird', 
    bull = 'bull', 
    cat = 'cat', 
    chicken = 'chicken', 
    cow = 'cow', 
    cub = 'cub', 
    deer = 'deer', 
    dog = 'dog', 
    duck = 'duck', 
    eagle = 'eagle', 
    elephant = 'elephant', 
    frog = 'frog', 
    goat = 'goat', 
    gorilla = 'gorilla',
    hamster = 'hamster', 
    hippo = 'hippo', 
    horse = 'horse', 
    kangaroo = 'kangaroo', 
    koala = 'koala', 
    lion = 'lion', 
    mouse = 'mouse', 
    monkey = 'monkey', 
    octopus = 'octopus', 
    ostrich = 'ostrich', 
    penguin = 'penguin', 
    pig = 'pig', 
    rabbit = 'rabbit', 
    rhino = 'rhino', 
    sheep = 'sheep', 
    squirrel = 'squirrel', 
    tiger = 'tiger', 
    wolf = 'wolf'
}

export enum Personalities{
    crancky = 'crancky', 
    jock = 'jock', 
    lazy = 'lazy', 
    smug = 'smug', 
    normal = 'normal', 
    peppy = 'peppy', 
    sisterly = 'sisterly', 
    snooty = 'snooty'
}

export enum Shadows{
    tiny='tiny',
    small='small',
    medium = 'medium',
    large = 'large',
    very_large = 'very_large',
    largest = 'largest',
    medium_fin = 'medium_fin',
    large_fin = 'large_fin',
    largest_fin = 'largest_fin'
}