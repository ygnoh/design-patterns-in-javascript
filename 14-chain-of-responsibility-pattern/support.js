/**
 * @abstract
 */
class Support {
    /**
     * @param {string} name
     */
    constructor(name) {
        /**
         * @type {string}
         * @private
         */
        this._name = name;
        /**
         * @type {Support}
         * @private
         */
        this._next = null;
    }

    /**
     * @param {Support} next
     * @return {Support}
     */
    setNext(next) {
        this._next = next;

        return next;
    }

    /**
     * @param {Trouble} trouble
     * @constant
     */
    support(trouble) {
        if (this.resolve(trouble)) {
            this.done(trouble);
        } else if (this._next !== null) {
            this._next.support(trouble);
        } else {
            this.fail(trouble);
        }
    }

    /**
     * @return {string}
     */
    toString() {
        return `[${this._name}]`;
    }

    /**
     * @param {Trouble} trouble
     * @returns {boolean}
     * @abstract
     * @protected
     */
    resolve(trouble) {}

    /**
     * @param {Trouble} trouble
     * @protected
     */
    done(trouble) {
        console.log(`${trouble} is resolved by ${this}.`);
    }

    /**
     * @param {Trouble} trouble
     * @protected
     */
    fail(trouble) {
        console.log(`${trouble} cannot be resolved.`);
    }
}

module.exports = Support;
