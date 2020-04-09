const ProgramNode = require("./program-node");
const Context = require("./context");

const TEXT = "program repeat 4 repeat 3 go right go left end right end end";
/**
 * @type {Node}
 */
const pn = new ProgramNode();

pn.parse(new Context(TEXT));

console.log(`A text was: ${TEXT}`);
console.log(`Its syntax tree is: ${pn}`);
