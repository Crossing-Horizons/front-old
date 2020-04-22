export class Entity{
    name: string;
    description: string;
    image: string;
    exchangable: boolean;
    size: string;
    place: string;
    date: Date;
    time: string;
    sell_price: number;
    rarity: number;
    obtaining: string;
    buy_price: number;
    clothing_type: Clothing;
    plant_type: Plants;
    animal_type: Animals;
    personality: string;
    genre: Genre;
    slogan: string;
    catchphrase: string;
    birthdate: string;
    character: number;
    type: string;
}

const enum Genre{
    male, female
}

const enum Clothing{
    accessory, shoes,
}

const enum Plants{
    tree, flower
}

const enum Animals{
    alligator, anteater, bear, bird, bull, cat, chicken, cow, cub, deer, dog, duck, eagle, elephant, frog, goat, gorilla,
    hamster, hippo, horse, kangaroo, koala, lion, mouse, monkey, octopus, ostrich, penguin, pig, rabbit, rhino, sheep, squirrel, 
    tiger, wolf
}