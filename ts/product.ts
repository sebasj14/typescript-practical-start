import * as categories from './productCategory';

export interface Product {
    name: string;
    price: number;
    category?: categories.ProductCategory;
}

export class Initial implements Product {
    name: string = "Please select a product.";
    price: number = 0;
}

export class OneUpShroom implements Product {
    name: string = "1-Up";
    price: number = 100;
    category: categories.OneUpShroomCategory = new categories.OneUpShroomCategory();
}

export class RedShroom implements Product {
    name: string = "Grow!";
    price: number = 20;
    category: categories.RedShroomCategory = new categories.RedShroomCategory();
}

export class FireFlower implements Product {
    name: string = "Fireballs";
    price: number = 50;
    category: categories.FireFlowerCategory = new categories.FireFlowerCategory();
}

export class PowerStar implements Product {
    name: string = "Inivincibility";
    price: number = 50;
    category: categories.PowerStarCategory = new categories.PowerStarCategory();
}