import {AttackDetails, AttackWithSaberDetails} from "./interfaces";

class Soldier implements AttackDetails {
    constructor(public level: number) {
        this.level = level;
    }

    public attack() {
        return this.level * 1;
    }
}

class Jedi implements AttackWithSaberDetails {
    constructor(public level: number) {
        this.level = level;
    }

    public attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter implements AttackDetails {
    constructor(public jedi: Jedi) {
        this.jedi = jedi;
    }

    public attack() {
        return this.jedi.attackWithSaber();
    }
}
