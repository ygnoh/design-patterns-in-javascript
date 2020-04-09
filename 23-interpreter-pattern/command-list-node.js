const Node = require("./node");
const CommandNode = require("./command-node");

// <command list> : : = <command>* end
class CommandListNode extends Node {
    constructor() {
        super();

        /**
         * @type {Node[]}
         * @private
         */
        this._list = [];
    }

    parse(context) {
        while (true) {
            if (!context.currentToken) {
                throw new Error("Missing 'end'");
            } else if (context.currentToken === "end") {
                context.skipToken("end");

                break;
            } else {
                /**
                 * @type {Node}
                 */
                const commandNode = new CommandNode();

                commandNode.parse(context);

                this._list.push(commandNode);
            }
        }
    }

    toString() {
        return this._list.toString();
    }
}

module.exports = CommandListNode;
