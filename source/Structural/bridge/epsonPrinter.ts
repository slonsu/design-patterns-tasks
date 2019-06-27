import {Ink, Printer, PrinterDetails} from "./index";

export class EpsonPrinter extends Printer implements PrinterDetails {
    constructor(public ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}
