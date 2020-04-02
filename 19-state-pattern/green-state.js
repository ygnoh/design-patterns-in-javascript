/**
 * @implements State
 */
class GreenState {
    /**
     * @returns {State}
     */
    static getInstance() {
        if (GreenState._instance) {
            return GreenState._instance;
        }

        return (GreenState._instance = new GreenState());
    }

    go(light ) {
        const YellowState = require("./yellow-state");

        console.log(GreenState._name);
        light.change(YellowState.getInstance());
    }
}

/**
 * @type {State}
 * @private
 */
GreenState._instance = null;
/**
 * @type {string}
 * @private
 */
GreenState._name = "green light";

module.exports = GreenState;
