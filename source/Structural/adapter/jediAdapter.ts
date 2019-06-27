import {AttackDetails, Jedi} from "./index";

export class JediAdapter implements AttackDetails {
    constructor(public jedi: Jedi) {
        this.jedi = jedi;
    }

    public attack() {
        return this.jedi.attackWithSaber();
    }
}
