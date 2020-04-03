const BoxFactory = require("./box-factory");

/**
 * @type {BoxFactory}
 */
const boxFactory = BoxFactory.getInstance();

boxFactory.createBox(100, 300);
boxFactory.createBox(200, 300);
boxFactory.createBox(300, 300);
boxFactory.createBox(100, 300);
boxFactory.createBox(200, 300);
boxFactory.createBox(300, 300);
