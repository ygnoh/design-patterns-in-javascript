const Support = require("./support");

class LimitSupport extends Support {
    /**
     * @param {string} name
     * @param {number} limit
     */
    constructor(name, limit) {
        super(name);

        /**
         * @type {number}
         * @private
         */
        this._limit = limit;
    }

    resolve(trouble) {
        return trouble.getNumber() < this._limit;
    }
}

module.exports = LimitSupport;
