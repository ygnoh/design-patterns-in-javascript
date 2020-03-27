const Visitor = require("./visitor");
const Directory = require("./directory");

class FileFindVisitor extends Visitor {
    /**
     * @param {string} ext
     */
    constructor(ext) {
        super();

        /**
         * @type {string}
         * @private
         */
        this._ext = ext;
        /**
         * @type {File[]}
         * @private
         */
        this._found = [];
    }

    visit(entry) {
        if (entry instanceof Directory) {
            entry.dir.forEach(e => {
                e.accept(this);
            });
        } else {
            if (entry.getName().endsWith(this._ext)) {
                this._found.push(entry);
            }
        }
    }

    /**
     * @return {File[]}
     */
    getFoundFiles() {
        return this._found;
    }
}

module.exports = FileFindVisitor;
