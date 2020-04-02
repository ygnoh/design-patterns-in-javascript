/**
 * @implements State
 */
class RedState {
    /**
     * @returns {State}
     */
    static getInstance() {
        if (RedState._instance) {
            return RedState._instance;
        }

        return (RedState._instance = new RedState());
    }

    go(light ) {
        const GreenState = require("./green-state");

        console.log(RedState._name);
        light.change(GreenState.getInstance());
    }
}

/**
 * @type {State}
 * @private
 */
RedState._instance = null;
/**
 * @type {string}
 * @private
 */
RedState._name = "red light";

module.exports = RedState;
