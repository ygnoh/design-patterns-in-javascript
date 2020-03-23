const DisplayImpl = require("./display-impl");

class StringDisplayImpl extends DisplayImpl {
    /**
     * @param {string} string
     */
    constructor(string) {
        super();

        /**
         * @type {string}
         * @private
         */
        this._string = string;

        /**
         * @type {number}
         * @private
         */
        this._width = string.length;
    }

    rawOpen() {
        this._printLine();
    }

    rawPrint() {
        console.log(`|${this._string}|`);
    }

    rawClose() {
        this._printLine();
    }

    /**
     * @private
     */
    _printLine() {
        let output = "+";

        for (let i = 0; i < this._width; i++) {
            output += "-";
        }

        output += "+";

        console.log(output);
    }
}

module.exports = StringDisplayImpl;
