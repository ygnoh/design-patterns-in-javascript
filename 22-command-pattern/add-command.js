/**
 * @implements Command
 */
class AddCommand {
    /**
     * @param {number} val
     */
    constructor(val) {
        /**
         * @type {number}
         */
        this._val = val;
    }

    execute(x) {
        console.log(`Add(${this._val}) executed`);

        return x + this._val;
    }
}

module.exports = AddCommand;
