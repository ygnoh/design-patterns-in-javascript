/**
 * @implements Element
 */
class Entry {
    /**
     * @returns {string}
     * @abstract
     */
    getName() {}

    /**
     * @returns {number}
     * @abstract
     */
    getSize() {}

    /**
     * @param {Entry} entry
     * @returns {Entry}
     */
    add(entry) {
        throw new Error("Cannot add");
    }

    /**
     * @returns {string}
     */
    toString() {
        return `${this.getName()} (${this.getSize()})`;
    }
}

module.exports = Entry;
