const Item = require("./item");

/**
 * @abstract
 */
class Tray extends Item {
    /**
     * @param {string} caption
     */
    constructor(caption) {
        super(caption);

        /**
         * @type {Item[]}
         * @protected
         */
        this.tray = [];
    }

    /**
     * @param {Item} item
     */
    add(item) {
        this.tray.push(item);
    }
}

module.exports = Tray;
