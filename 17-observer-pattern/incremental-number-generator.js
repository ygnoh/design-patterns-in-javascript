const NumberGenerator = require("./number-generator");

class IncrementalNumberGenerator extends NumberGenerator {
    /**
     * @param {number} start
     * @param {number} end
     * @param {number} inc
     */
    constructor(start, end, inc) {
        super();
        /**
         * @type {number}
         * @private
         */
        this._start = start;
        /**
         * @type {number}
         * @private
         */
        this._end = end;
        /**
         * @type {number}
         * @private
         */
        this._inc = inc;
        /**
         * @type {number}
         * @private
         */
        this._number = 0;
    }

    getNumber() {
        return this._number;
    }

    execute() {
        for (let i = this._start; i < this._end; i += this._inc) {
            this._number = i;

            this.notifyObservers();
        }
    }
}

module.exports = IncrementalNumberGenerator;
