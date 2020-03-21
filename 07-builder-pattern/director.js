class Director {
    /**
     * @param {Builder} builder
     */
    constructor(builder) {
        /**
         * @type {Builder}
         * @private
         */
        this._builder = builder;
    }

    /**
     * Create a document
     */
    construct() {
        this._builder.makeTitle("Greeting");
        this._builder.makeString("Morning and daytime");
        this._builder.makeItems([
            "Good morning",
            "Hello"
        ]);
        this._builder.makeString("Evening");
        this._builder.makeItems([
            "Hello",
            "Good evening"
        ]);
        this._builder.close();
    }
}

module.exports = Director;
