const Banner = require("./banner");

/**
 * @implements Print
 */
class PrintBanner extends Banner {
    /**
     * @param {string} str
     */
    constructor(str) {
        super(str);
    }

    printWeak() {
        super.showWithParen();
    }

    printStrong() {
        super.showWithAster();
    }
}

module.exports = PrintBanner;
