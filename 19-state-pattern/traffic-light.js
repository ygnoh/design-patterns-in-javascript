/**
 * @implements Context
 */
class TrafficLight {
    /**
     * @param {State} initState
     */
    constructor(initState) {
        /**
         * @type {State}
         * @private
         */
        this._state = initState;
        /**
         * @type {number}
         * @private
         */
        this._callLimit = 0;
    }

    change(state) {
        if (this._callLimit--) {
            this._state = state;
            this._state.go(this);
        }
    }

    start() {
        this._callLimit = 10;
        this._state.go(this);
    }
}

module.exports = TrafficLight;
