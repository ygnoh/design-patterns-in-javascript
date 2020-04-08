/**
 * @implements Command
 */
class DivideCommand {
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
        console.log(`Divide(${this._val}) executed`);

        return x / this._val;
    }
}

module.exports = DivideCommand;
