/**
 * @abstract
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
        throw new Error("Cannot add an entry");
    }

    /**
     * @param {string} [prefix=""]
     * @abstract
     */
    printList(prefix = "") {}

    /**
     * @returns {string}
     */
    toString() {
        return `${this.getName()} (${this.getSize()})`;
    }
}

module.exports = Entry;
