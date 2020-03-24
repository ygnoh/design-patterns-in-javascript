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
        const bet = Math.random() * this._getSum(this._currentHandValue) | 0;
        let handValue;

        if (bet < this._history[this._currentHandValue][0]) {
            handValue = 0;
        } else if (bet < (this._history[this._currentHandValue][0] + this._history[this._currentHandValue][1])) {
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
        let sum = 0;

        for (let i = 0; i < 3; i++) {
            sum += this._history[hv][i];
        }

        return sum;
    }

    study(win) {
        if (win) {
            this._history[this._prevHandValue][this._currentHandValue]++;
        } else {
            this._history[this._prevHandValue][(this._currentHandValue + 1) % 3]++;
            this._history[this._prevHandValue][(this._currentHandValue + 2) % 3]++;
        }
    }
}

module.exports = ProbStrategy;
