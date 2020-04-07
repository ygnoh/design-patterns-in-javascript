/**
 * @interface
 */
class Printable {
    /**
     * @param {string} name
     * @abstract
     */
    setPrinterName(name) {}

    /**
     * @returns {string}
     * @abstract
     */
    getPrinterName() {}

    /**
     * @param {string} string
     * @abstract
     */
    print(string) {}
}
