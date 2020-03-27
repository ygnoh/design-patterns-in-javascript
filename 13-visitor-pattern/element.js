/**
 * @interface
 */
class Element {
    /**
     * @param {Visitor} v
     * @abstract
     */
    accept(v) {}
}

module.exports = Element;
