const AbstractDisplay = require("./abstract-display");

class StringDisplay extends AbstractDisplay {
    /**
     * @param {string} str
     */
    constructor(str) {
        super();

        /**
         * @type {string}
         * @private
         */
        this._str = str;

        /**
         * @type {number}
         * @private
         */
        this._width = str.length;
    }

    open() {
        this._printLine();
    }

    print() {
        console.log(`|${this._str}|`);
    }

    close() {
        this._printLine();
    }

    /**
     * @private
     */
    _printLine() {
        let line = "+";

        for (let i = 0; i < this._width; i++) {
            line += "-";
        }

        line += "+";

        console.log(line);
    }
}

module.exports = StringDisplay;
