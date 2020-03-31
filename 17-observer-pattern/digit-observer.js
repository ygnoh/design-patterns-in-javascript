/**
 * @implements Observer
 */
class DigitObserver {
    update(generator) {
        console.log("Digit Observer:", generator.getNumber());
    }
}

module.exports = DigitObserver;
