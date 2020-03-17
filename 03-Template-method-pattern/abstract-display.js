/**
 * @abstract
 */
class AbstractDisplay {
    /**
     * @abstract
     */
    open() {}

    /**
     * @abstract
     */
    print() {}

    /**
     * @abstract
     */
    close() {}

    /**
     * @constant
     */
    display() {
        this.open();

        for (let i = 0; i < 5; i++) {
            this.print();
        }

        this.close();
    }
}

module.exports = AbstractDisplay;
