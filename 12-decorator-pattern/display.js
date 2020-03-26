/**
 * @abstract
 */
class Display {
    /**
     * @returns {number}
     * @abstract
     */
    getColumns() {}

    /**
     * @returns {number}
     * @abstract
     */
    getRows() {}

    /**
     * @param {number} row
     * @abstract
     */
    getRowText(row) {}

    show() {
        for (let i = 0; i < this.getRows(); i++) {
            console.log(this.getRowText(i));
        }
    }
}

module.exports = Display;
