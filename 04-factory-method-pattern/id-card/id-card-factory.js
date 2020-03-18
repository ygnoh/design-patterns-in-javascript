const {Factory} = require("../framework");
const IdCard = require("./id-card");

class IdCardFactory extends Factory {
    constructor() {
        super();

        /**
         * @type {string[]}
         * @private
         */
        this._owners = [];
    }

    createProduct(owner) {
        return new IdCard(owner);
    }

    registerProduct(product) {
        this._owners.push((/** @type {IdCard} */product).getOwner());
    }

    /**
     * @returns {string[]}
     */
    getOwners() {
        return this._owners;
    }
}

module.exports = IdCardFactory;
