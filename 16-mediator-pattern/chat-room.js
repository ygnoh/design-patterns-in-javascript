class ChatRoom {
    constructor() {
        /**
         * @type {Participant[]}
         * @private
         */
        this._participants = [];
    }

    /**
     * @param {Participant} participant
     */
    register(participant) {
        this._participants.push(participant);

        participant.setChatRoom(this);
    }

    send(msg, from, to) {
        if (to) {
            to.receive(msg, from);
        } else {
            this._participants.forEach(participant => {
                participant !== from && participant.receive(msg, from);
            });
        }
    }
}

module.exports = ChatRoom;
