/**
 * @implements Observer
 */
class GraphObserver {
    update(generator) {
        console.log("Graph observer:", "*".repeat(generator.getNumber()));
    }
}

module.exports = GraphObserver;
