abstract class ProductCategory {
    protected imgPath = "img/";

    name: string;
    abstract getImageUrl(): string;
}

class OneUpShroomCategory extends ProductCategory {
    name = "1-Up";
    getImageUrl(): string {
        return this.imgPath + "OneUpShroom.png";
    }
}

class RedShroomCategory extends ProductCategory {
    name = "RedShroom";
    getImageUrl(): string {
        return this.imgPath + "RedShroom.png";
    }
}

class FireFlowerCategory extends ProductCategory {
    name = "FireFlower";
    getImageUrl(): string {
        return this.imgPath + "FireFlower.png";
    }
}

class PowerStarCategory extends ProductCategory {
    name = "PowerStar";
    getImageUrl(): string {
        return this.imgPath + "PowerStar.png";
    }
}

export { ProductCategory, OneUpShroomCategory, RedShroomCategory, FireFlowerCategory, PowerStarCategory }