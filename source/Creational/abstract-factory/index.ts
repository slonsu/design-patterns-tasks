import {B1} from "./b1";
import {Details, DroidDetails} from "./interfaces";
import {Rx24} from "./rx24";

function droidProducer(kind?: Details) {
    if (kind === "battle") {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory(): DroidDetails {
    return new B1();
}

function pilotDroidFactory(): DroidDetails {
    return new Rx24();
}

export {Details, DroidDetails};
