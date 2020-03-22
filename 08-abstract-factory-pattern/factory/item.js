/**
 * @abstract
 */
class Item {
    /**
     * @param {string} caption
     */
    constructor(caption) {
        /**
         * @type {string}
         * @protected
         */
        this.caption = caption;
    }

    /**
     * @returns {string}
     * @abstract
     */
    makeHTML() {}
}

module.exports = Item;
