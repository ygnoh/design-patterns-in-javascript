/**
 * @implements Command
 */
class MultiplyCommand {
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
        console.log(`Multiply(${this._val}) executed`);

        return x * this._val;
    }
}

module.exports = MultiplyCommand;
