/**
 * @interface
 */
class Strategy {
    /**
     * @returns {Hand}
     * @abstract
     */
    nextHand() {}

    /**
     * @param {boolean} win
     * @abstract
     */
    study(win) {}
}

module.exports = Strategy;
