const Visitor = require("./visitor");
const Directory = require("./directory");

class SizeVisitor extends Visitor {
    constructor() {
        super();

        /**
         * @type {number}
         * @private
         */
        this._size = 0;
    }

    visit(entry) {
        if (entry instanceof Directory) {
            entry.dir.forEach(e => {
                e.accept(this);
            });
        } else {
            this._size += entry.getSize();
        }
    }

    /**
     * @return {number}
     */
    getSize() {
        return this._size;
    }
}

module.exports = SizeVisitor;
