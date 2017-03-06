/// <reference path="productCategory.ts" />

interface Product {
    name: string;
    price: number;
    category?: ProductCategory;
}

class Initial implements Product {
    name: string = "Please select a product.";
    price: number = 0;
}

class OneUpShroom implements Product {
    name: string = "1-Up";
    price: number = 100;
    category: OneUpShroomCategory = new OneUpShroomCategory();
}

class RedShroom implements Product {
    name: string = "Grow!";
    price: number = 20;
    category: RedShroomCategory = new RedShroomCategory();
}

class FireFlower implements Product {
    name: string = "Fireballs";
    price: number = 50;
    category: FireFlowerCategory = new FireFlowerCategory();
}

class PowerStar implements Product {
    name: string = "Inivincibility";
    price: number = 50;
    category: PowerStarCategory = new PowerStarCategory();
}