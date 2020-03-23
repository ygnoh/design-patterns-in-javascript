const Display = require("./display");
const CountDisplay = require("./count-display");
const RandomDisplay = require("./random-display");
const StringDisplayImpl = require("./string-display-impl");

/**
 * @type {Display}
 */
const d1 = new Display(new StringDisplayImpl("Hello Korea"));
/**
 * @type {Display}
 */
const d2 = new CountDisplay(new StringDisplayImpl("Hello world"));
/**
 * @type {CountDisplay}
 */
const d3 = new CountDisplay(new StringDisplayImpl("Hello universe"));
/**
 * @type {RandomDisplay}
 */
const d4 = new RandomDisplay(new StringDisplayImpl("Hello there"));

d1.display();
d2.display();
d3.display();
d3.multiDisplay(3);
d4.randomDisplay(5);
