const ChatRoom = require("./chat-room");
const Participant = require("./participant");

/**
 * @type {ChatRoom}
 */
const chatRoom = new ChatRoom();
/**
 * @type {Participant}
 */
const john = new Participant("John");
/**
 * @type {Participant}
 */
const alice = new Participant("Alice");
/**
 * @type {Participant}
 */
const mike = new Participant("Mike");

chatRoom.register(john);
chatRoom.register(alice);
chatRoom.register(mike);

john.send("Hello guys");
alice.send("You know what?", john);
