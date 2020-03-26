const Display = require("./display");

class MultiStringDisplay extends Display {
    constructor() {
        super();

        /**
         * @type {string[]}
         * @private
         */
        this._strings = [];
        /**
         * @type {number}
         * @private
         */
        this._maxLen = 0;
    }

    getColumns() {
        return this._maxLen;
    }

    getRows() {
        return this._strings.length;
    }

    getRowText(row) {
        const rowLen = this._strings[row].length;

        return this._strings[row] + " ".repeat(this._maxLen - rowLen);
    }

    /**
     * @param {string} str
     */
    add(str) {
        str.length > this._maxLen && (this._maxLen = str.length);

        this._strings.push(str);
    }
}

module.exports = MultiStringDisplay;
