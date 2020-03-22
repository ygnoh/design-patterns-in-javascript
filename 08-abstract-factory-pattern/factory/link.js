const Item = require("./item");

/**
 * @abstract
 */
class Link extends Item {
    /**
     * @param {string} caption
     * @param {string} url
     */
    constructor(caption, url) {
        super(caption);

        /**
         * @type {string}
         * @protected
         */
        this.url = url;
    }
}

module.exports = Link;
