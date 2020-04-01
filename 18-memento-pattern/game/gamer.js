const Memento = require("./memento");

class Gamer {
    /**
     * @param {number} money
     */
    constructor(money) {
        /**
         * @type {number}
         * @private
         */
        this._money = money;
        /**
         * @type {string[]}
         * @private
         */
        this._fruits = [];
    }

    /**
     * @return {number}
     */
    getMoney() {
        return this._money;
    }

    bet() {
        const dice = (Math.random() * 6 + 1) | 0;

        if (dice === 1) {
            this._money += 100;
            console.log("Your money increased.");
        } else if (dice === 2) {
            this._money /= 2;
            console.log("Your money halved.");
        } else if (dice === 6) {
            const fruit = this._getFruit();

            this._fruits.push(fruit);

            console.log(`You've got a fruit(${fruit}).`);
        } else {
            console.log("Nothing happened.");
        }
    }

    /**
     * @returns {Memento}
     */
    createMemento() {
        const memento = new Memento(this._money);

        this._fruits.forEach(fruit => {
            fruit.startsWith("Delicious") && memento.addFruit(fruit);
        });

        return memento;
    }

    /**
     * @param {Memento} memento
     */
    restoreMemento(memento) {
        this._money = memento.money;
        this._fruits = memento.getFruits();
    }

    /**
     * @return {string}
     */
    toString() {
        return `[money = ${this._money}, fruits = ${this._fruits}]`;
    }

    /**
     * @returns {string}
     * @private
     */
    _getFruit() {
        const fruit = Gamer.fruitsName[Math.random() * Gamer.fruitsName.length | 0];

        return Math.random() >= 0.5 ? `Delicious ${fruit}` : fruit;
    }
}

Gamer.fruitsName = ["apple", "grape", "banana", "pear"];

module.exports = Gamer;
