var Coins;
(function (Coins) {
    let imagePath = "img/";
    class Coin {
        constructor(value) {
            this.value = value;
            this.value = value;
        }
    }
    Coins.Coin = Coin;
    class StarCoin extends Coin {
        constructor() {
            super(10);
        }
        getImageUrl() {
            return imagePath + "StarCoin.png";
        }
    }
    Coins.StarCoin = StarCoin;
    class RedCoin extends Coin {
        constructor() {
            super(50);
        }
        getImageUrl() {
            return imagePath + "RedCoin.png";
        }
    }
    Coins.RedCoin = RedCoin;
    class BlueCoin extends Coin {
        constructor() {
            super(25);
        }
        getImageUrl() {
            return imagePath + "BlueCoin.png";
        }
    }
    Coins.BlueCoin = BlueCoin;
    class RainbowCoin extends Coin {
        constructor() {
            super(100);
        }
        getImageUrl() {
            return imagePath + "RainbowCoin.png";
        }
    }
    Coins.RainbowCoin = RainbowCoin;
})(Coins || (Coins = {}));
class ProductCategory {
    constructor() {
        this.imgPath = "img/";
    }
}
class OneUpShroomCategory extends ProductCategory {
    constructor() {
        super(...arguments);
        this.name = "1-Up";
    }
    getImageUrl() {
        return this.imgPath + "OneUpShroom.png";
    }
}
class RedShroomCategory extends ProductCategory {
    constructor() {
        super(...arguments);
        this.name = "RedShroom";
    }
    getImageUrl() {
        return this.imgPath + "RedShroom.png";
    }
}
class FireFlowerCategory extends ProductCategory {
    constructor() {
        super(...arguments);
        this.name = "FireFlower";
    }
    getImageUrl() {
        return this.imgPath + "FireFlower.png";
    }
}
class PowerStarCategory extends ProductCategory {
    constructor() {
        super(...arguments);
        this.name = "PowerStar";
    }
    getImageUrl() {
        return this.imgPath + "PowerStar.png";
    }
}
/// <reference path="productCategory.ts" />
class Initial {
    constructor() {
        this.name = "Please select a product.";
        this.price = 0;
    }
}
class OneUpShroom {
    constructor() {
        this.name = "1-Up";
        this.price = 100;
        this.category = new OneUpShroomCategory();
    }
}
class RedShroom {
    constructor() {
        this.name = "Grow!";
        this.price = 20;
        this.category = new RedShroomCategory();
    }
}
class FireFlower {
    constructor() {
        this.name = "Fireballs";
        this.price = 50;
        this.category = new FireFlowerCategory();
    }
}
class PowerStar {
    constructor() {
        this.name = "Inivincibility";
        this.price = 50;
        this.category = new PowerStarCategory();
    }
}
/// <reference path="product.ts" />
class ProductFactory {
    static getProduct() {
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
/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
class Cell {
    constructor(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
}
class VendingMachine {
    constructor() {
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new Initial()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [
            new Coins.StarCoin(),
            new Coins.RedCoin(),
            new Coins.BlueCoin(),
            new Coins.RainbowCoin()
        ];
        this.canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);
        this.select = (cell) => {
            cell.sold(false);
            this.selectedCell(cell);
        };
        this.acceptCoin = (coin) => {
            let oldTotal = this.paid();
            this.paid(oldTotal + coin.value);
        };
        this.pay = () => {
            if (this.selectedCell().stock() < 1) {
                alert("Out of stock!");
                return;
            }
            let currentPaid = this.paid();
            this.paid(Math.round((currentPaid - this.selectedCell().product.price) * 100) / 100);
            let currentStock = this.selectedCell().stock();
            this.selectedCell().stock(currentStock - 1);
            this.selectedCell().sold(true);
        };
    }
    set size(givenSize) {
        this.cells([]);
        for (let index = 0; index < givenSize; index++) {
            let product = ProductFactory.getProduct();
            this.cells.push(new Cell(product));
        }
    }
}
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map