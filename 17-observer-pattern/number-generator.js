/**
 * @abstract
 */
class NumberGenerator {
    constructor() {
        /**
         * @type {Observer[]}
         * @private
         */
        this._observers = []
    }

    /**
     * @param {Observer} observer
     */
    addObserver(observer) {
        this._observers.push(observer);
    }

    /**
     * @param {Observer} observer
     */
    deleteObserver(observer) {
        const index = this._observers.findIndex(ob => ob === observer);

        this._observers.splice(index, 1);
    }

    notifyObservers() {
        this._observers.forEach(ob => ob.update(this));
    }

    /**
     * @returns {number}
     * @abstract
     */
    getNumber() {}

    /**
     * @abstract
     */
    execute() {}
}

module.exports = NumberGenerator;
