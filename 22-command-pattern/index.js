const Calculator = require("./calculator");
const AddCommand = require("./add-command");
const SubtractCommand = require("./subtract-command");
const MultiplyCommand = require("./multiply-command");
const DivideCommand = require("./divide-command");

/**
 * @type {Calculator}
 */
const cal = new Calculator();
/**
 * @type {Command}
 */
const add5 = new AddCommand(5);
/**
 * @type {Command}
 */
const sub3 = new SubtractCommand(3);
/**
 * @type {Command}
 */
const mul10 = new MultiplyCommand(10);
/**
 * @type {Command}
 */
const div2 = new DivideCommand(2);

cal.execute(add5);
cal.execute(sub3);
cal.execute(mul10);
cal.execute(div2);
console.log(`Result is ${cal.value}`);

cal.undo();
console.log(`Result is ${cal.value}`);

cal.undo();
console.log(`Result is ${cal.value}`);
