const Entry = require("./entry");

class Directory extends Entry {
    /**
     * @param {string} name
     */
    constructor(name) {
        super();

        /**
         * @type {string}
         * @private
         */
        this._name = name;
        /**
         * @type {Entry[]}
         * @private
         */
        this._directory = [];
    }

    getName() {
        return this._name;
    }

    getSize() {
        return this._directory.reduce((acc, entry) => {
            acc += entry.getSize();

            return acc;
        }, 0);
    }

    add(entry) {
        this._directory.push(entry);

        return this;
    }

    printList(prefix = "") {
        console.log(`${prefix}/${this}`);

        this._directory.forEach(entry => {
            entry.printList(`${prefix}/${this._name}`);
        });
    }
}

module.exports = Directory;
