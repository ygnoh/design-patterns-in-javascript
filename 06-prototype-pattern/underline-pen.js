/**
 * @implements Product
 */
class UnderlinePen {
    /**
     * @param {string} ulChar
     */
    constructor(ulChar) {
        /**
         * @type {string}
         * @private
         */
        this._ulChar = ulChar;
    }

    use(s) {
        const length = s.length;

        console.log(`"${s}"`);
        console.log(` ${this._ulChar.repeat(length)} `);
    }

    createClone() {
        return (/** @type Product */new UnderlinePen(this._ulChar));
    }
}

module.exports = UnderlinePen;
