const Display = require("./display");

class CountDisplay extends Display {
    /**
     * @param {DisplayImpl} impl
     */
    constructor(impl) {
        super(impl);
    }

    /**
     * @param {number} times
     */
    multiDisplay(times) {
        this.open();

        for (let i = 0; i < times; i++) {
            this.print();
        }

        this.close();
    }
}

module.exports = CountDisplay;
