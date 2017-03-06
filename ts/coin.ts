let imagePath = "img/";

export abstract class Coin {
    constructor(public value: number) {
        this.value = value;
    }
    abstract getImageUrl(): string;
}

export class StarCoin extends Coin {
    constructor() {
        super(10);
    }

    getImageUrl(): string {
        return imagePath + "StarCoin.png";
    }
}

export class RedCoin extends Coin {
    constructor() {
        super(50);
    }

    getImageUrl(): string {
        return imagePath + "RedCoin.png";
    }
}

export class BlueCoin extends Coin {
    constructor() {
        super(25);
    }

    getImageUrl(): string {
        return imagePath + "BlueCoin.png";
    }
}

export class RainbowCoin extends Coin {
    constructor() {
        super(100);
    }

    getImageUrl(): string {
        return imagePath + "RainbowCoin.png";
    }
}