class Calculator {
    constructor() {
        /**
         * @type {number}
         * @private
         */
        this._val = 0;
        /**
         * @type {Command[]}
         * @private
         */
        this._commands = [];
    }

    get value() {
        return this._val;
    }

    /**
     * @param {Command} command
     */
    execute(command) {
        this._val = command.execute(this._val);

        this._commands.push(command);
    }

    undo() {
        console.log("Undoing...");

        this._val = 0;

        this._commands.pop();
        this._commands.forEach(command => {
            this._val = command.execute(this._val);
        });
    }
}

module.exports = Calculator;
