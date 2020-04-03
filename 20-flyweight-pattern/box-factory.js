const Box = require("./box");

class BoxFactory {
    /**
     * @return {BoxFactory}
     */
    static getInstance() {
        if (BoxFactory._instance) {
            return BoxFactory._instance;
        }

        return (BoxFactory._instance = new BoxFactory());
    }

    constructor() {
        /**
         * @type {{}}
         * @private
         */
        this._pool = {};
    }

    /**
     * @param {number} w
     * @param {number} h
     * @returns {Box}
     */
    createBox(w, h) {
        const key = (w + h) * (w + h + 1) / 2 + h; // Cantor pairing function

        return this._pool[key] || (this._pool[key] = new Box(w, h));
    }
}

/**
 * @type {BoxFactory}
 * @private
 */
BoxFactory._instance = null;

module.exports = BoxFactory;
