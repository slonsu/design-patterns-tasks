import {car, CarDetails} from "./index";

export class Bmw implements CarDetails {
    constructor(public model: car, public price: number, public maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
