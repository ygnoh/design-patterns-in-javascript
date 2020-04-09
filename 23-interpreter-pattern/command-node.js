const Node = require("./node");
const RepeatCommandNode = require("./repeat-command-node");
const PrimitiveCommandNode = require("./primitive-command-node");

// <command> : : = <repeat command> | <primitive command>
class CommandNode extends Node {
    constructor() {
        super();

        /**
         * @type {Node}
         * @private
         */
        this._node = null;
    }

    parse(context) {
        if (context.currentToken === "repeat") {
            this._node = new RepeatCommandNode();
        } else {
            this._node = new PrimitiveCommandNode();
        }

        this._node.parse(context);
    }

    toString() {
        return this._node.toString();
    }
}

module.exports = CommandNode;
