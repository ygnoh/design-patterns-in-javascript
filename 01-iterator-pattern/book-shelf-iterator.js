/**
 * @implements Iterator
 */
class BookShelfIterator {
    constructor(bookShelf) {
        /**
         * @type {BookShelf}
         * @private
         */
        this._bookShelf = bookShelf;
        /**
         * @type {number}
         * @private
         */
        this._index = 0;
    }

    hasNext() {
        return this._index < this._bookShelf.length;
    }

    /**
     * @returns {object}
     */
    next() {
        const book = this._bookShelf.getBookAt(this._index);

        this._index++;

        return book;
    }
}

module.exports = BookShelfIterator;
