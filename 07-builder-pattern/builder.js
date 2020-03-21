/**
 * @abstract
 */
class Builder {
    /**
     * @param {string} title
     * @abstract
     */
    makeTitle(title) {}

    /**
     * @param {string} str
     * @abstract
     */
    makeString(str) {}

    /**
     * @param {string[]} items
     * @abstract
     */
    makeItems(items) {}

    /**
     * @abstract
     */
    close() {}
}

module.exports = Builder;
