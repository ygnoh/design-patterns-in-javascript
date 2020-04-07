const sleep = ms => new Promise(res => setTimeout(res, ms));

/**
 * @implements Printable
 */
class Printer {
    /**
     * @param {string} [name]
     */
    constructor(name) {
        /**
         * @type {string}
         * @private
         */
        this._name = name;

        this._heavyJob(name);
    }

    /**
     * @param name
     * @return {Promise<void>}
     * @private
     */
    async _heavyJob(name) {
        console.log(`Creating a printer '${name}'`);

        for (let i = 0; i < 5; i++) {
            await sleep(1000);

            console.log(".");
        }

        console.log("Done");
    }

    setPrinterName(name) {
        this._name = name;
    }

    getPrinterName() {
        return this._name;
    }

    print(string) {
        console.log(`===${this._name}===`);
        console.log(string);
    }
}

module.exports = Printer;
