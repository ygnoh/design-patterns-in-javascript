const TextBuilder = require("./text-builder");
const Director = require("./director");

/**
 * @type {TextBuilder}
 */
const textBuilder = new TextBuilder();
/**
 * @type {Director}
 */
const director = new Director(textBuilder);

director.construct();

console.log(textBuilder.getResult());
