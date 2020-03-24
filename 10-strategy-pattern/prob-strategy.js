const Hand = require("./hand");

/**
 * @implements Strategy
 */
class ProbStrategy {
    constructor() {
        this._prevHandValue = 0;
        this._currentHandValue = 0;
        this._history = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];
    }

    nextHand() {
        const row = this._history[this._currentHandValue];
        const bet = Math.random() * this._getSum(this._currentHandValue) | 0;
        let handValue;

        if (bet < row[0]) {
            handValue = 0;
        } else if (bet < (row[0] + row[1])) {
            handValue = 1;
        } else {
            handValue = 2;
        }

        this._prevHandValue = this._currentHandValue;
        this._currentHandValue = handValue;

        return Hand.getHand(handValue);
    }

    /**
     * @param {number} hv
     * @returns {number}
     * @private
     */
    _getSum(hv) {
        return this._history[hv].reduce((acc, count) => acc += count, 0);
    }

    study(win) {
        const row = this._history[this._prevHandValue];

        if (win) {
            row[this._currentHandValue]++;
        } else {
            row[(this._currentHandValue + 1) % 3]++;
            row[(this._currentHandValue + 2) % 3]++;
        }
    }
}

module.exports = ProbStrategy;
