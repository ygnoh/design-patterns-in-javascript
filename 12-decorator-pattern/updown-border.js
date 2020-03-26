const Border = require("./border");

class UpdownBorder extends Border {
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
        return this.display.getColumns();
    }

    getRows() {
        return this.display.getRows() + 2;
    }

    getRowText(row) {
        if (row === 0 || row === this.display.getRows() + 1) {
            return this._borderChar.repeat(this.getColumns());
        } else {
            return this.display.getRowText(row - 1);
        }
    }
}

module.exports = UpdownBorder;
