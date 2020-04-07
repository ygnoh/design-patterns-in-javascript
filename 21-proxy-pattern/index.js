const PrinterProxy = require("./printer-proxy");

/**
 * @type {Printable}
 */
const p = new PrinterProxy("Alice");

console.log(`Current name is ${p.getPrinterName()}.`);
p.setPrinterName("Bob");
console.log(`Current name is ${p.getPrinterName()}.`);
p.print("Hello world");
