const Directory = require("./directory");
const File = require("./file");

/**
 * @type {Directory}
 */
const rootDir = new Directory("root");
/**
 * @type {Directory}
 */
const binDir = new Directory("bin");
/**
 * @type {Directory}
 */
const tmpDir = new Directory("tmp");
/**
 * @type {Directory}
 */
const usrDir = new Directory("usr");

rootDir.add(binDir);
rootDir.add(tmpDir);
rootDir.add(usrDir);
binDir.add(new File("vi", 1000));
binDir.add(new File("latex", 2000));

/**
 * @type {Directory}
 */
const johnDir = new Directory("John");
/**
 * @type {Directory}
 */
const jakeDir = new Directory("Jake");

usrDir.add(johnDir);
usrDir.add(jakeDir);
johnDir.add(new File("index.js", 100));
jakeDir.add(new File("hello-world.js", 200));
rootDir.printList();
