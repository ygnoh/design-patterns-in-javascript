/**
 * @implements Command
 */
class SubtractCommand {
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
        console.log(`Subtract(${this._val}) executed`);

        return x - this._val;
    }
}

module.exports = SubtractCommand;
