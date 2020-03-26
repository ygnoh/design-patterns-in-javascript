const Display = require("./display");

/**
 * @abstract
 */
class Border extends Display {
    /**
     * @param {Display} display
     */
    constructor(display) {
        super();

        /**
         * @type {Display}
         * @protected
         */
        this.display = display;
    }
}

module.exports = Border;
