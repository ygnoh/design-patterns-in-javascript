const {Product} = require("../framework");

class IdCard extends Product {
    /**
     * @param {string} owner
     */
    constructor(owner) {
        super();

        /**
         * @type {string}
         * @private
         */
        this._owner = owner;

        console.log(`${owner}'s card created.`);
    }

    use() {
        console.log(`${this._owner}'s card used`);
    }

    /**
     * @returns {string}
     */
    getOwner() {
        return this._owner;
    }
}

module.exports = IdCard;
