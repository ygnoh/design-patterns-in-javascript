const DB = {
    mailData: {
        "admin@abc.com": "John",
        "test@abc.com": "Anonymous"
    }
};

class Database {
    /**
     * @param {string} dbname
     */
    static getProperties(dbname) {
        return DB[dbname];
    }
}

module.exports = Database;
