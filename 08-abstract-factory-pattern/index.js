const Factory = require("./factory/factory");

// Choose a factory you want to use
const FACTORY_NAME = "list-factory";

/**
 * @type {Factory}
 */
const factory = Factory.getFactory(FACTORY_NAME);
/**
 * @type {Link}
 */
const google = factory.createLink("Google", "https://www.google.com/");
/**
 * @type {Link}
 */
const facebook = factory.createLink("Facebook", "https://www.facebook.com/");
/**
 * @type {Link}
 */
const instagram = factory.createLink("Instagram", "https://www.instagram.com/");
/**
 * @type {Tray}
 */
const searchTray = factory.createTray("search");

searchTray.add(google);

/**
 * @type {Tray}
 */
const socialTray = factory.createTray("social");

socialTray.add(facebook);
socialTray.add(instagram);

/**
 * @type {Page}
 */
const page = factory.createPage("web");

page.add(searchTray);
page.add(socialTray);
page.output();
