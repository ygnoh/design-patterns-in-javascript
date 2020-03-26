const Display = require("./display");

class StringDisplay extends Display {
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
    }

    getColumns() {
        return this._string.length;
    }

    getRows() {
        return 1;
    }

    getRowText(row) {
        if (row === 0) {
            return this._string;
        } else {
            return null;
        }
    }
}

module.exports = StringDisplay;
