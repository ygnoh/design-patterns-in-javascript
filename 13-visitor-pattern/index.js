const Directory = require("./directory");
const File = require("./file");
const ListVisitor = require("./list-visitor");
const FileFindVisitor = require("./file-find-visitor");

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
binDir.add(new File("index.html", 1000));
binDir.add(new File("app.js", 2000));

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
johnDir.add(new File("test.xml", 100));
jakeDir.add(new File("main.html", 200));

rootDir.accept(new ListVisitor());

/**
 * @type {FileFindVisitor}
 */
const ffv = new FileFindVisitor(".html");

rootDir.accept(ffv);

ffv.getFoundFiles().forEach(file => {
    console.log(file.toString());
});
