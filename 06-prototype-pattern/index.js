const MessageBox = require("./message-box");
const UnderlinePen = require("./underline-pen");
const Manager = require("./framework/manager");

/**
 * @type {Manager}
 */
const manager = new Manager();
/**
 * @type {UnderlinePen}
 */
const upen = new UnderlinePen("-");
/**
 * @type {MessageBox}
 */
const mbox = new MessageBox("*");
/**
 * @type {MessageBox}
 */
const sbox = new MessageBox("/");

manager.register("strong message", upen);
manager.register("warning box", mbox);
manager.register("slash box", sbox);

/**
 * @type {Product}
 */
const p1 = manager.create("strong message");
p1.use("Hello, world");
/**
 * @type {Product}
 */
const p2 = manager.create("warning box");
p2.use("Hello, world");
/**
 * @type {Product}
 */
const p3 = manager.create("slash box");
p3.use("Hello, world");
