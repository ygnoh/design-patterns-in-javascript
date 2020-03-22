const Link = require("../factory/link");

class ListLink extends Link {
    /**
     * @param {string} caption
     * @param {string} url
     */
    constructor(caption, url) {
        super(caption, url);
    }

    makeHTML() {
        return `<li><a href="${this.url}">${this.caption}</a></li>\n`;
    }
}

module.exports = ListLink;
