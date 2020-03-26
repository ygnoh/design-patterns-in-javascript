const StringDisplay = require("./string-display");
const MultiStringDisplay = require("./multi-string-display");
const SideBorder = require("./side-border");
const FullBorder = require("./full-border");
const UpdownBorder = require("./updown-border");

/**
 * @type {Display}
 */
const b1 = new StringDisplay("Hello world");
/**
 * @type {Display}
 */
const b2 = new SideBorder(b1, "#");
/**
 * @type {Display}
 */
const b3 = new FullBorder(b2);

b1.show();
b2.show();
b3.show();

/**
 * @type {MultiStringDisplay}
 */
const msDisplay = new MultiStringDisplay();

msDisplay.add("Hi");
msDisplay.add("Great to see you");
msDisplay.add("Good evening");

const b4 = new FullBorder(
    new UpdownBorder(
        new SideBorder(
            new UpdownBorder(
                new SideBorder(
                    msDisplay,
                    "*"
                ),
                "="
            ),
            "|"
        ),
        "/"
    )
);

b4.show();
