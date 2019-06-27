interface Clonable {
    clone(): 
}

class Sheep {

    constructor(public name: string, public weight: number) {
        this.name = name;
        this.weight = weight;
    }

    public clone() {
        return new Sheep(this.name, this.weight);
    }
}
