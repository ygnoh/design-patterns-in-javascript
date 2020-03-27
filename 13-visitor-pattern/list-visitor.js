const Visitor = require("./visitor");
const Directory = require("./directory");

class ListVisitor extends Visitor {
    constructor() {
        super();

        /**
         * @type {string}
         * @private
         */
        this._currentDir = "";
    }

    visit(entry) {
        console.log(`${this._currentDir}/${entry}`);

        if (entry instanceof Directory) {
            const saveDir = this._currentDir;

            this._currentDir = `${this._currentDir}/${entry.getName()}`;

            entry.dir.forEach(e => {
                e.accept(this);
            });

            this._currentDir = saveDir;
        }
    }
}

module.exports = ListVisitor;
