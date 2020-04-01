const Gamer = require("./game/gamer");

/**
 * @type {Gamer}
 */
const gamer = new Gamer(100);
/**
 * @type {Memento}
 */
let memento = gamer.createMemento();

for (let i = 0; i < 100; i++) {
    console.log("====", i);
    console.log(`Current state: ${gamer}`);

    gamer.bet();

    console.log("Remaining money:", gamer.getMoney());

    if (gamer.getMoney() > memento.getMoney()) {
        console.log("Saving current state...");

        memento = gamer.createMemento();
    } else if (gamer.getMoney() < memento.getMoney() / 2) {
        console.log("Restoring current state...");

        gamer.restoreMemento(memento);
    }
}
