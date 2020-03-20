/**
 * @interface
 */
class Product {
    /**
     * @param {string} s
     * @abstract
     */
    use(s) {}

    /**
     * @returns {Product}
     * @abstract
     */
    createClone() {}
}

module.exports = Product;
