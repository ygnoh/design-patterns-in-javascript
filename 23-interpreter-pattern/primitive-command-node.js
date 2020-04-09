const Node = require("./node");

// <primitive command> : : = go | right | left
class PrimitiveCommandNode extends Node {
    constructor() {
        super();

        /**
         * @type {string}
         * @private
         */
        this._name = "";
    }

    parse(context) {
        this._name = context.currentToken;

        context.skipToken(this._name);

        if (!["go", "right", "left"].includes(this._name)) {
            throw new Error(`${this._name} is undefined`);
        }
    }

    toString() {
        return this._name;
    }
}

module.exports = PrimitiveCommandNode;
