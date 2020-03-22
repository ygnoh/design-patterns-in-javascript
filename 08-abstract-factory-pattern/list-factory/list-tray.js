const Tray = require("../factory/tray");

class ListTray extends Tray {
    /**
     * @param {string} caption
     */
    constructor(caption) {
        super(caption);
    }

    makeHTML() {
        let html = `<li>\n${this.caption}<ul>`;

        for (const item of this.tray) {
            html += item.makeHTML();
        }

        html += `</ul></li>`;

        return html;
    }
}

module.exports = ListTray;
