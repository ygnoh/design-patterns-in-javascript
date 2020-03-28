const NoSupport = require("./no-support");
const LimitSupport = require("./limit-support");
const SpecialSupport = require("./special-support");
const OddSupport = require("./odd-support");
const Trouble = require("./trouble");

/**
 * @type {Support}
 */
const alice = new NoSupport("Alice");
/**
 * @type {Support}
 */
const bob = new LimitSupport("Bob", 100);
/**
 * @type {Support}
 */
const charlie = new SpecialSupport("Charlie", 429);
/**
 * @type {Support}
 */
const diana = new LimitSupport("Diana", 200);
/**
 * @type {Support}
 */
const elmo = new OddSupport("Elmo");
/**
 * @type {Support}
 */
const fred = new LimitSupport("Fred", 300);

alice.setNext(bob).setNext(charlie).setNext(diana).setNext(elmo).setNext(fred);

for (let i = 0; i < 500; i += 33) {
    alice.support(new Trouble(i));
}
