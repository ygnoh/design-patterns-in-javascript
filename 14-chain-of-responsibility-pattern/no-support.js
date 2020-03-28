const Support = require("./support");

class NoSupport extends Support {
    resolve(trouble) {
        return false;
    }
}

module.exports = NoSupport;
