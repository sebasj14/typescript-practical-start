/// <reference path="product.ts" />

class ProductFactory {
    static getProduct(): Product {
        let product;
        let random = Math.floor(Math.random() * 4);
        switch (random) {
            case 0:
                product = new FireFlower();
                break;
            case 1:
                product = new PowerStar();
                break;
            case 2:
                product = new OneUpShroom();
                break;
            case 3:
                product = new RedShroom();
                break;
            default:
                break;
        }

        return product;
    }
}