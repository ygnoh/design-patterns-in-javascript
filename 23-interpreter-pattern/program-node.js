const Node = require("./node");
const CommandListNode = require("./command-list-node");

// <program> : : = program <command list>
class ProgramNode extends Node {
    constructor() {
        super();

        /**
         * @type {Node}
         * @private
         */
        this._commandListNode = null;
    }

    parse(context) {
        context.skipToken("program");

        this._commandListNode = new CommandListNode();

        this._commandListNode.parse(context);
    }

    toString() {
        return `[program ${this._commandListNode}]`;
    }
}

module.exports = ProgramNode;
