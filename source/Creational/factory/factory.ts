import {Bmw, car} from "./index";

export class Factory {
    public static create(type: car) {
        if (type === "X5") { return new Bmw(type, 108000, 300); }
        if (type === "X6") { return new Bmw(type, 111000, 320); }
    }
}
