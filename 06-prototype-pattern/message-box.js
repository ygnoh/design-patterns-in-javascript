/**
 * @implements Product
 */
class MessageBox {
    /**
     * @param {string} decoChar
     */
    constructor(decoChar) {
        /**
         * @type {string}
         * @private
         */
        this._decoChar = decoChar;
    }

    use(s) {
        const length = s.length;

        console.log(this._decoChar.repeat(length + 4));
        console.log(`${this._decoChar} ${s} ${this._decoChar}`);
        console.log(this._decoChar.repeat(length + 4));
    }

    createClone() {
        return (/** @type {Product} */new MessageBox(this._decoChar));
    }
}

module.exports = MessageBox;
