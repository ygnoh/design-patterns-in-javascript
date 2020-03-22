const Page = require("../factory/page");

class ListPage extends Page {
    /**
     * @param {string} title
     * @param {string} author
     */
    constructor(title, author) {
        super(title, author);
    }

    makeHTML() {
        let html = `<html><head><title>${this.title}</title></head>\n<body>\n<h1>${this.title}</h1>\n<ul>\n`;

        for (const item of this.content) {
            html += item.makeHTML();
        }

        html += `</ul>\n<hr><address>${this.author}</address></body></html>\n`;

        return html;
    }
}

module.exports = ListPage;
