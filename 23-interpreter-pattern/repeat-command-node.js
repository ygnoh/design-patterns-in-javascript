const Node = require("./node");

// <repeat command> : : = repeat <number> <command list>
class RepeatCommandNode extends Node {
    constructor() {
        super();

        /**
         * @type {number}
         * @private
         */
        this._number = 0;
        /**
         * @type {Node}
         * @private
         */
        this._commandListNode = null;
    }

    parse(context) {
        const CommandListNode = require("./command-list-node");

        context.skipToken("repeat");

        this._number = context.currentNumber;

        context.nextToken();

        this._commandListNode = new CommandListNode();

        this._commandListNode.parse(context);
    }

    toString() {
        return `[repeat ${this._number} ${this._commandListNode}]`;
    }
}

module.exports = RepeatCommandNode;
