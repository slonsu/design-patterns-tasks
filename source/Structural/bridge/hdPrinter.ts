import {Ink, Printer, PrinterDetails} from "./index";

export class HPprinter extends Printer implements PrinterDetails {
    constructor(public ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}
