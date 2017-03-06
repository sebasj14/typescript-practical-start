define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let imagePath = "img/";
    class Coin {
        constructor(value) {
            this.value = value;
            this.value = value;
        }
    }
    exports.Coin = Coin;
    class StarCoin extends Coin {
        constructor() {
            super(10);
        }
        getImageUrl() {
            return imagePath + "StarCoin.png";
        }
    }
    exports.StarCoin = StarCoin;
    class RedCoin extends Coin {
        constructor() {
            super(50);
        }
        getImageUrl() {
            return imagePath + "RedCoin.png";
        }
    }
    exports.RedCoin = RedCoin;
    class BlueCoin extends Coin {
        constructor() {
            super(25);
        }
        getImageUrl() {
            return imagePath + "BlueCoin.png";
        }
    }
    exports.BlueCoin = BlueCoin;
    class RainbowCoin extends Coin {
        constructor() {
            super(100);
        }
        getImageUrl() {
            return imagePath + "RainbowCoin.png";
        }
    }
    exports.RainbowCoin = RainbowCoin;
});
//# sourceMappingURL=coin.js.map