const Border = require("./border");

class SideBorder extends Border {
    /**
     * @param {Display} display
     * @param {string} ch
     */
    constructor(display, ch) {
        super(display);

        /**
         * @type {string}
         * @private
         */
        this._borderChar = ch;
    }

    getColumns() {
        return this.display.getColumns() + 2;
    }

    getRows() {
        return this.display.getRows();
    }

    getRowText(row) {
        return this._borderChar + this.display.getRowText(row) + this._borderChar;
    }
}

module.exports = SideBorder;
