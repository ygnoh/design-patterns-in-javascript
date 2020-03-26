const Border = require("./border");

class FullBorder extends Border {
    getColumns() {
        return this.display.getColumns() + 2;
    }

    getRows() {
        return this.display.getRows() + 2;
    }

    getRowText(row) {
        if (row === 0 || row === this.display.getRows() + 1) {
            return `+${this._makeLine("-", this.display.getColumns())}+`;
        } else {
            return `|${this.display.getRowText(row - 1)}|`;
        }
    }

    /**
     * @param {string} ch
     * @param {number} count
     * @private
     */
    _makeLine(ch, count) {
        return ch.repeat(count);
    }
}

module.exports = FullBorder;
