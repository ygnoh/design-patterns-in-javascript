const Hand = require("./hand");

/**
 * @implements Strategy
 */
class WinningStrategy {
    constructor() {
        /**
         * @type {boolean}
         * @private
         */
        this._won = false;

        /**
         * @type {Hand}
         * @private
         */
        this._prevHand = null;
    }

    nextHand() {
        if (!this._won) {
            this._prevHand = Hand.getHand(Math.random() * 3 | 0);
        }

        return this._prevHand;
    }

    study(win) {
        this._won = win;
    }
}

module.exports = WinningStrategy;
