class Hand {
    /**
     * @param {number} handValue
     */
    constructor(handValue) {
        /**
         * @type {number}
         */
        this.handValue = handValue;
    }

    static getHand(handValue) {
        return Hand.hand[handValue];
    }

    /**
     * @param {Hand} h
     * @returns {boolean}
     */
    isStrongerThan(h) {
        return this._fight(h) === 1;
    }

    /**
     * @param {Hand} h
     * @returns {number}
     * @private
     */
    _fight(h) {
        if (this === h) {
            return 0;
        } else if ((this.handValue + 1) % 3 === h.handValue) {
            return 1;
        } else {
            return -1;
        }
    }

    /**
     * @returns {string}
     */
    toString() {
        return Hand.name[this.handValue];
    }
}

Hand.ROCK = 0;
Hand.SCISSORS = 1;
Hand.PAPER = 2;
Hand.hand = [new Hand(Hand.ROCK), new Hand(Hand.SCISSORS), new Hand(Hand.PAPER)];
Hand.name = ["Rock", "Scissors", "Paper"];

module.exports = Hand;
