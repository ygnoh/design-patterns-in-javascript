const Support = require("./support");

class OddSupport extends Support {
    resolve(trouble) {
        return trouble.getNumber() % 2 === 1;
    }
}

module.exports = OddSupport;
