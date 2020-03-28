class Trouble {
    /**
     * @param {number} number
     */
    constructor(number) {
        /**
         * @type {number}
         * @private
         */
        this._number = number;
    }

    /**
     * @return {number}
     */
    getNumber() {
        return this._number;
    }

    /**
     * @return {string}
     */
    toString() {
        return `[Trouble ${this._number}]`;
    }
}

module.exports = Trouble;
