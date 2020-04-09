/**
 * @abstract
 */
class Node {
    /**
     * @param {Context} context
     * @abstract
     */
    parse(context) {}

    /**
     * @returns {string}
     * @abstract
     */
    toString() {}
}

module.exports = Node;
