define(["require", "exports", "./productCategory"], function (require, exports, categories) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Initial {
        constructor() {
            this.name = "Please select a product.";
            this.price = 0;
        }
    }
    exports.Initial = Initial;
    class OneUpShroom {
        constructor() {
            this.name = "1-Up";
            this.price = 100;
            this.category = new categories.OneUpShroomCategory();
        }
    }
    exports.OneUpShroom = OneUpShroom;
    class RedShroom {
        constructor() {
            this.name = "Grow!";
            this.price = 20;
            this.category = new categories.RedShroomCategory();
        }
    }
    exports.RedShroom = RedShroom;
    class FireFlower {
        constructor() {
            this.name = "Fireballs";
            this.price = 50;
            this.category = new categories.FireFlowerCategory();
        }
    }
    exports.FireFlower = FireFlower;
    class PowerStar {
        constructor() {
            this.name = "Inivincibility";
            this.price = 50;
            this.category = new categories.PowerStarCategory();
        }
    }
    exports.PowerStar = PowerStar;
});
//# sourceMappingURL=product.js.map