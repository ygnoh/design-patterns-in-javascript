/**
 * @abstract
 */
class Factory {
    /**
     * @param {string} owner
     * @returns {Product}
     * @constant
     */
    create(owner) {
        /**
         * @type {Product}
         */
        const p = this.createProduct(owner);

        this.registerProduct(p);

        return p;
    }

    /**
     * @param {string} owner
     * @returns {Product}
     * @protected
     * @abstract
     */
    createProduct(owner) {}

    /**
     * @param {Product} product
     * @protected
     * @abstract
     */
    registerProduct(product) {}
}

module.exports = Factory;
