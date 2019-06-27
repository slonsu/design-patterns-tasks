import {car, CarDetails} from "./interfaces/index";

class Factory {
    public static create(type: car) {
        if (type === "X5") { return new Bmw(type, 108000, 300); }
        if (type === "X6") { return new Bmw(type, 111000, 320); }
    }
}

class Bmw implements CarDetails {
    constructor(public model: car, public price: number, public maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
