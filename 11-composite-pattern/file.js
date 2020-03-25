const Entry = require("./entry");

class File extends Entry {
    /**
     * @param {string} name
     * @param {number} size
     */
    constructor(name, size) {
        super();

        /**
         * @type {string}
         * @private
         */
        this._name = name;
        /**
         * @type {number}
         * @private
         */
        this._size = size;
    }

    getName() {
        return this._name;
    }

    getSize() {
        return this._size;
    }

    printList(prefix= "") {
        console.log(`${prefix}/${this}`);
    }
}

module.exports = File;
