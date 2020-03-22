/**
 * @abstract
 */
class Page {
    /**
     * @param {string} title
     * @param {string} author
     */
    constructor(title, author) {
        /**
         * @type {string}
         * @protected
         */
        this.title = title;
        /**
         * @type {string}
         * @protected
         */
        this.author = author;
        /**
         * @type {Item[]}
         * @protected
         */
        this.content = [];
    }

    /**
     * @param {Item} item
     */
    add(item) {
        this.content.push(item);
    }

    output() {
        const filename = `${this.title}.html`;
        const html = this.makeHTML();

        console.log(filename);
        console.log(html);
    }

    /**
     * @returns {string}
     * @abstract
     */
    makeHTML() {}
}

module.exports = Page;
