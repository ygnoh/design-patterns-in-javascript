class Singleton {
    /**
     * @returns {Singleton}
     */
    static getInstance() {
        if (Singleton._instance) {
            return Singleton._instance;
        }

        Singleton._instance = new Singleton();

        return Singleton._instance;
    }

    /**
     * @private
     */
    constructor() {
        console.log("a singleton instance created");
    }
}

/**
 * @type {Singleton}
 * @private
 */
Singleton._instance = null;

module.exports = Singleton;
