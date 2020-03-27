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
         */
        this.dir = [];
    }

    getName() {
        return this._name;
    }

    getSize() {
        const SizeVisitor = require("./size-visitor"); // to avoid circular dependency
        const sizeVisitor = new SizeVisitor();

        this.accept(sizeVisitor);

        return sizeVisitor.getSize();
    }

    add(entry) {
        this.dir.push(entry);

        return this;
    }

    accept(v) {
        v.visit(this);
    }
}

module.exports = Directory;
