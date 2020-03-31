const NumberGenerator = require("./number-generator");

class RandomNumberGenerator extends NumberGenerator {
    constructor() {
        super();

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
        for (let i = 0; i < 20; i++) {
            this._number = Math.random() * 50 | 0;

            this.notifyObservers();
        }
    }
}

module.exports = RandomNumberGenerator;
