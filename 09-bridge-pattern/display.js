class Display {
    /**
     * @param {DisplayImpl} impl
     */
    constructor(impl) {
        /**
         * @type {DisplayImpl}
         * @private
         */
        this._impl = impl; // this is the bridge
    }

    open() {
        this._impl.rawOpen();
    }

    print() {
        this._impl.rawPrint();
    }

    close() {
        this._impl.rawClose();
    }

    /**
     * @constant
     */
    display() {
        this.open();
        this.print();
        this.close();
    }
}

module.exports = Display;
