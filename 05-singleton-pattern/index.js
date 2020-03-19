const Singleton = require("./singleton");

/**
 * @type {Singleton}
 */
const obj1 = Singleton.getInstance();
/**
 * @type {Singleton}
 */
const obj2 = Singleton.getInstance();


if (obj1 === obj2) {
    console.log("two instances are same.");
} else {
    console.log("two instances are different.");
}

