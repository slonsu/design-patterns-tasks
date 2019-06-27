import {InkDetails} from "./index";

export class Ink implements InkDetails {
    constructor(public type: string) {
        this.type = type;
    }
    public get() {
        return this.type;
    }
}
