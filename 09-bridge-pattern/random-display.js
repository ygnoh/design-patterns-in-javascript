const CountDisplay = require("./count-display");

class RandomDisplay extends CountDisplay {
    randomDisplay(times) {
        const until = Math.random() * times | 0;

        this.multiDisplay(until);
    }
}

module.exports = RandomDisplay;
