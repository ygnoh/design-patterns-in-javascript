class Manager {
    constructor() {
        /**
         * @type {Map<string, Product>}
         * @private
         */
        this._showCase = new Map();
    }

    /**
     * @param {string} name
     * @param {Product} proto
     */
    register(name, proto) {
        this._showCase.set(name, proto);
    }

    /**
     * @returns {Product}
     */
    create(name) {
        /**
         * @type {Product}
         */
        const p = (/** @type Product */this._showCase.get(name));

        return p.createClone();
    }
}

module.exports = Manager;
