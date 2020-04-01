class Memento {
    /**
     * @param {number} money
     * @package
     */
    constructor(money) {
        /**
         * @type {number}
         * @package
         */
        this.money = money;
        /**
         * @type {string[]}
         * @package
         */
        this.fruits = [];
    }

    /**
     * @return {number}
     */
    getMoney() {
        return this.money;
    }

    /**
     * @param {string} fruit
     * @package
     */
    addFruit(fruit) {
        this.fruits.push(fruit);
    }

    /**
     * @return {string[]}
     * @package
     */
    getFruits() {
        return [...this.fruits];
    }
}

module.exports = Memento;
