const {Product, Factory} = require("./framework");
const {IdCardFactory} = require("./id-card");

/**
 * @type {Factory}
 */
const factory = new IdCardFactory();
/**
 * @type {Product}
 */
const card1 = factory.create("John");
/**
 * @type {Product}
 */
const card2 = factory.create("Steve");

card1.use();
card2.use();
