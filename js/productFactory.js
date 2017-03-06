define(["require", "exports", "./product"], function (require, exports, products) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getProduct() {
        let product;
        let random = Math.floor(Math.random() * 4);
        switch (random) {
            case 0:
                product = new products.FireFlower();
                break;
            case 1:
                product = new products.PowerStar();
                break;
            case 2:
                product = new products.OneUpShroom();
                break;
            case 3:
                product = new products.RedShroom();
                break;
            default:
                break;
        }
        return product;
    }
    exports.default = getProduct;
});
//# sourceMappingURL=productFactory.js.map