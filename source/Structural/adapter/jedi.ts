import {AttackWithSaberDetails} from "./index";

export class Jedi implements AttackWithSaberDetails {
    constructor(public level: number) {
        this.level = level;
    }

    public attackWithSaber() {
        return this.level * 100;
    }
}
