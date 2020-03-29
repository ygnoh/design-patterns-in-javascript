const Database = require("./database");
const HtmlWriter = require("./html-writer");

class PageMaker {
    /**
     * @param {string} mailAddr
     */
    static makeWelcomePage(mailAddr) {
        const mail = Database.getProperties("mailData");
        const userName = mail[mailAddr];
        const writer = new HtmlWriter();

        writer.title(`Welcome to ${userName}'s page!`);
        writer.paragraph(`${userName} welcomes you.`);
        writer.paragraph("We are waiting for your mail.");
        writer.mailto(mailAddr, userName);
        writer.close();
    }
}

module.exports = PageMaker;
