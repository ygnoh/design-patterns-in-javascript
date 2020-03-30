class Participant {
    /**
     * @param {string} name
     */
    constructor(name) {
        /**
         * @type {string}
         * @private
         */
        this._name = name;
        /**
         * @type {ChatRoom}
         * @private
         */
        this._chatRoom = null;
    }

    /**
     * @param {ChatRoom} chatRoom
     */
    setChatRoom(chatRoom) {
        this._chatRoom = chatRoom;
    }

    /**
     * @return {string}
     */
    getName() {
        return this._name;
    }

    /**
     * @param {string} msg
     * @param {Participant} [to]
     */
    send(msg, to) {
        this._chatRoom.send(msg, this, to);
    }

    /**
     * @param {string} msg
     * @param {Participant} from
     */
    receive(msg, from) {
        console.log(`${this._name} received "${msg}" from ${from.getName()}`);
    }
}

module.exports = Participant;
