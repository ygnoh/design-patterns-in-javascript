class Player {
    /**
     * @param {string} name
     * @param {Strategy} strategy
     */
    constructor(name, strategy) {
        /**
         * @type {string}
         * @private
         */
        this._name = name;
        /**
         * @type {Strategy}
         * @private
         */
        this._strategy = strategy;
        /**
         * @type {number}
         * @private
         */
        this._winCount = 0;
        /**
         * @type {number}
         * @private
         */
        this._loseCount = 0;
        /**
         * @type {number}
         * @private
         */
        this._gameCount = 0;
    }

    /**
     * @returns {Hand}
     */
    nextHand() {
        return this._strategy.nextHand();
    }

    win() {
        this._strategy.study(true);
        this._winCount++;
        this._gameCount++;
    }

    lose() {
        this._strategy.study(false);
        this._loseCount++;
        this._gameCount++;
    }

    even() {
        this._gameCount++;
    }

    /**
     * @returns {string}
     */
    toString() {
        return `[${this._name}:${this._gameCount} games, ${this._winCount} win, ${this._loseCount} lose]`;
    }
}

module.exports = Player;
