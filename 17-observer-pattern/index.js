const RandomNumberGenerator = require("./random-number-generator");
const IncrementalNumberGenerator = require("./incremental-number-generator");
const DigitObserver = require("./digit-observer");
const GraphObserver = require("./graph-observer");

/**
 * @type {NumberGenerator}
 */
const rnGenerator = new RandomNumberGenerator();
/**
 * @type {Observer}
 */
const observer1 = new DigitObserver();
/**
 * @type {Observer}
 */
const observer2 = new GraphObserver();

rnGenerator.addObserver(observer1);
rnGenerator.addObserver(observer2);
rnGenerator.execute();

/**
 * @type {NumberGenerator}
 */
const inGenerator = new IncrementalNumberGenerator(10, 50, 5);
/**
 * @type {Observer}
 */
const observer3 = new DigitObserver();
/**
 * @type {Observer}
 */
const observer4 = new GraphObserver();

inGenerator.addObserver(observer3);
inGenerator.addObserver(observer4);
inGenerator.execute();
