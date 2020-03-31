/**
 * @interface
 */
class Observer {
    /**
     * @param {NumberGenerator} generator
     * @abstract
     */
    update(generator) {}
}

module.exports = Observer;
