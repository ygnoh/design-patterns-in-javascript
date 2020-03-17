class Banner {
    /**
     * @param {string} str
     */
    constructor(str) {
        /**
         * @type {string}
         * @private
         */
        this._str = str;
    }

    /**
     * print out the string with parentheses
     */
    showWithParen() {
        console.log(`(${this._str})`)
    }

    /**
     * print out the string with asterisks
     */
    showWithAster() {
        console.log(`*${this._str}*`)
    }
}

module.exports = Banner;
