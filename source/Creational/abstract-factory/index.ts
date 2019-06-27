import {Details, DroidDetails} from "./interfaces/index";

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

class B1 implements DroidDetails {
    public info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements DroidDetails {
    public info() {
        return "Rx24, Pilot Droid";
    }
}
