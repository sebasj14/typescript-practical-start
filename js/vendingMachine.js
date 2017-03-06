define(["require", "exports", "./product", "./productFactory", "./coin"], function (require, exports, product_1, productFactory_1, Coins) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VendingMachineSize;
    (function (VendingMachineSize) {
        VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
        VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
        VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
    })(VendingMachineSize = exports.VendingMachineSize || (exports.VendingMachineSize = {}));
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
            this.selectedCell = ko.observable(new Cell(new product_1.Initial()));
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
                let product = productFactory_1.default();
                this.cells.push(new Cell(product));
            }
        }
    }
    exports.VendingMachine = VendingMachine;
});
//# sourceMappingURL=vendingMachine.js.map