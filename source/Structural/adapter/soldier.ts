import {AttackDetails} from "./index";

export class Soldier implements AttackDetails {
    constructor(public level: number) {
        this.level = level;
    }

    public attack() {
        return this.level * 1;
    }
}
