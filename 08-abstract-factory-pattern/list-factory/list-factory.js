const Factory = require("../factory/factory");
const ListLink = require("./list-link");
const ListTray = require("./list-tray");
const ListPage = require("./list-page");

class ListFactory extends Factory {
    createLink(caption, url) {
        return new ListLink(caption, url);
    }

    createTray(caption) {
        return new ListTray(caption);
    }

    createPage(title, author) {
        return new ListPage(title, author);
    }
}

module.exports = ListFactory;
