define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ProductCategory {
        constructor() {
            this.imgPath = "img/";
        }
    }
    exports.ProductCategory = ProductCategory;
    class OneUpShroomCategory extends ProductCategory {
        constructor() {
            super(...arguments);
            this.name = "1-Up";
        }
        getImageUrl() {
            return this.imgPath + "OneUpShroom.png";
        }
    }
    exports.OneUpShroomCategory = OneUpShroomCategory;
    class RedShroomCategory extends ProductCategory {
        constructor() {
            super(...arguments);
            this.name = "RedShroom";
        }
        getImageUrl() {
            return this.imgPath + "RedShroom.png";
        }
    }
    exports.RedShroomCategory = RedShroomCategory;
    class FireFlowerCategory extends ProductCategory {
        constructor() {
            super(...arguments);
            this.name = "FireFlower";
        }
        getImageUrl() {
            return this.imgPath + "FireFlower.png";
        }
    }
    exports.FireFlowerCategory = FireFlowerCategory;
    class PowerStarCategory extends ProductCategory {
        constructor() {
            super(...arguments);
            this.name = "PowerStar";
        }
        getImageUrl() {
            return this.imgPath + "PowerStar.png";
        }
    }
    exports.PowerStarCategory = PowerStarCategory;
});
//# sourceMappingURL=productCategory.js.map