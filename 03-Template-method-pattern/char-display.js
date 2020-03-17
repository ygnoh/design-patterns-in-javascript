const AbstractDisplay = require("./abstract-display");

class CharDisplay extends AbstractDisplay {
    /**
     * @param {string} ch
     */
    constructor(ch) {
        super();

        /**
         * @type {string}
         * @private
         */
        this._ch = ch;
    }

    open() {
        console.log("<<");
    }

    print() {
        console.log(this._ch);
    }

    close() {
        console.log(">>");
    }
}

module.exports = CharDisplay;
