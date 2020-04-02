/**
 * @implements State
 */
class YellowState {
    /**
     * @returns {State}
     */
    static getInstance() {
        if (YellowState._instance) {
            return YellowState._instance;
        }

        return (YellowState._instance = new YellowState());
    }

    go(light ) {
        const RedState = require("./red-state");

        console.log(YellowState._name);
        light.change(RedState.getInstance());
    }
}

/**
 * @type {State}
 * @private
 */
YellowState._instance = null;
/**
 * @type {string}
 * @private
 */
YellowState._name = "yellow light";

module.exports = YellowState;
