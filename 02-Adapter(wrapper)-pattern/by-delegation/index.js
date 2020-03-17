const PrintBanner = require("./print-banner");

/**
 * @type {Print}
 */
const printBanner = new PrintBanner("hello");

printBanner.printWeak();
printBanner.printStrong();
