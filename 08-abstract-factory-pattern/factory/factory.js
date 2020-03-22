const getClass = name => require(`../${name}/${name}`);

/**
 * @abstract
 */
class Factory {
    /**
     * @param {string} classname
     * @returns {Factory}
     */
    static getFactory(classname) {
        return (/** @type {Factory} */new (getClass(classname)));
    }

    /**
     * @param {string} caption
     * @param {string} url
     * @returns {Link}
     * @abstract
     */
    createLink(caption, url) {}

    /**
     * @param {string} caption
     * @return {Tray}
     * @abstract
     */
    createTray(caption) {}

    /**
     * @param {string} title
     * @param {string} author
     * @returns {Page}
     * @abstract
     */
    createPage(title, author) {}
}

module.exports = Factory;
