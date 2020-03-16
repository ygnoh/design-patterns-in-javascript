const BookShelfIterator = require("./book-shelf-iterator");

/**
 * @implements Aggregate
 */
class BookShelf {
    constructor() {
        /**
         * @type {[Book]}
         * @private
         */
        this._books = [];
        /**
         * @type {number}
         * @private
         */
        this._last = 0;
    }

    /**
     * @param {number} index
     * @returns {Book}
     */
    getBookAt(index) {
        return this._books[index];
    }

    /**
     * @param {Book} book
     */
    appendBook(book) {
        this._books.push(book);
        this._last++;
    }

    get length() {
        return this._last;
    }

    iterator() {
        return new BookShelfIterator(this);
    }
}

module.exports = BookShelf;
