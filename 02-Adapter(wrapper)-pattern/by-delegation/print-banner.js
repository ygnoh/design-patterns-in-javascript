const Print = require("./print");
const Banner = require("./banner");

class PrintBanner extends Print {
    /**
     * @param {string} str
     */
    constructor(str) {
        super();

        /**
         * @type {Banner}
         * @private
         */
        this._banner = new Banner(str);
    }

    printWeak() {
        this._banner.showWithParen();
    }

    printStrong() {
        this._banner.showWithAster();
    }
}

module.exports = PrintBanner;
