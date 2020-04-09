class Context {
    /**
     * @param {string} str
     */
    constructor(str) {
        /**
         * @type {string[]}
         * @private
         */
        this._tokens = str.split(" ");
        /**
         *
         * @type {number}
         * @private
         */
        this._idx = -1;

        this.nextToken();
    }

    /**
     * @return {string}
     */
    nextToken() {
        if (this._hasMoreTokens) {
            this._currentToken = this._tokens[++this._idx];
        } else {
            this._currentToken = null;
        }

        return this._currentToken;
    }

    /**
     * @returns {boolean}
     */
    get _hasMoreTokens() {
        return  this._idx < this._tokens.length - 1;
    }

    /**
     * @returns {string}
     */
    get currentToken() {
        return this._currentToken;
    }

    skipToken(token) {
        if (this.currentToken !== token) {
            throw new Error(`Warning ${token} is expected, but ${this.currentToken} is found.`);
        }

        this.nextToken();
    }

    /**
     * @returns {number}
     */
    get currentNumber() {
        return +this.currentToken;
    }
}

module.exports = Context;
