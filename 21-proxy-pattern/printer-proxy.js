const Printer = require("./printer");

/**
 * @implements Printable
 */
class PrinterProxy {
    /**
     * @param {string} [name=""]
     */
    constructor(name = "") {
        /**
         * @type {string}
         * @private
         */
        this._name = name;
        /**
         * @type {Printer}
         * @private
         */
        this._real = null;
    }

    setPrinterName(name) {
        this._real && this._real.setPrinterName(name);

        this._name = name;
    }

    getPrinterName() {
        return this._name;
    }

    print(string) {
        this._realize();
        this._real.print(string);
    }

    /**
     * @private
     */
    _realize() {
        !this._real && (this._real = new Printer(this._name));
    }
}

module.exports = PrinterProxy;
