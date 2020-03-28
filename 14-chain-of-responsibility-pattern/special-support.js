const Support = require("./support");

class SpecialSupport extends Support {
    /**
     * @param {string} name
     * @param {number} number
     */
    constructor(name, number) {
        super(name);

        /**
         * @type {number}
         * @private
         */
        this._number = number;
    }

    resolve(trouble) {
        return trouble.getNumber() === this._number;
    }
}

module.exports = SpecialSupport;
