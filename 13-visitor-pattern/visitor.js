/**
 * @abstract
 */
class Visitor {
    /**
     * @param {Entry} entry
     * @abstract
     */
    visit(entry) {}
}

module.exports = Visitor;
