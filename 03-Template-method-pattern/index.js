const CharDisplay = require("./char-display");
const StringDisplay = require("./string-display");

/**
 * @type {AbstractDisplay}
 */
const d1 = new CharDisplay("H");

/**
 * @type {AbstractDisplay}
 */
const d2 = new StringDisplay("Hello, world.");

d1.display();
d2.display();
