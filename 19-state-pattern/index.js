const TrafficLight = require("./traffic-light");
const RedState = require("./red-state");

/**
 * @type {State}
 */
const redState = RedState.getInstance();
/**
 * @type {TrafficLight}
 */
const trafficLight = new TrafficLight(redState);

trafficLight.start();
