const Builder = require("./builder");

class TextBuilder extends Builder {
    constructor() {
        super();

        /**
         * @type {string}
         * @private
         */
        this._str = "";
    }

    makeTitle(title) {
        this._str += `=================\n<${title}>\n`;
    }

    makeString(str) {
        this._str += `* ${str}\n`;
    }

    makeItems(items) {
        items.forEach(item => {
            this._str += ` - ${item}\n`;
        })
    }

    close() {
        this._str += "=================";
    }

    /**
     * @returns {string}
     */
    getResult() {
        return this._str;
    }
}

module.exports = TextBuilder;
