class HtmlWriter {
    constructor() {
        /**
         * @type {string}
         * @private
         */
        this._content = "";
    }

    /**
     * @param {string} title
     */
    title(title) {
        this._content += `<html><head><title>${title}</title></head><body>\n<h1>${title}</h1>\n`;
    }

    /**
     * @param {string} msg
     */
    paragraph(msg) {
        this._content += `<p>${msg}</p>\n`;
    }

    /**
     * @param {string} href
     * @param {string} caption
     */
    link(href, caption) {
        this.paragraph(`<a href="${href}">${caption}</a>`);
    }

    /**
     * @param {string} mailAddr
     * @param {string} userName
     */
    mailto(mailAddr, userName) {
        this.link(`mailto:${mailAddr}`, userName);
    }

    close() {
        this._content += "</body></html>\n";

        console.log(this._content);
    }
}


module.exports = HtmlWriter;
