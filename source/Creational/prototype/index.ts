import {Clonable} from "./interfaces";

class Sheep implements Clonable {

    constructor(public name: string, public weight: number) {
        this.name = name;
        this.weight = weight;
    }

    public clone() {
        return new Sheep(this.name, this.weight);
    }
}
