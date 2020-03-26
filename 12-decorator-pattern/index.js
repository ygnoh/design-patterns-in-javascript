const StringDisplay = require("./string-display");
const SideBorder = require("./side-border");
const FullBorder = require("./full-border");

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

const b4 = new SideBorder(
    new FullBorder(
        new FullBorder(
            new SideBorder(
                new FullBorder(
                    new StringDisplay("Nice to meet you")
                ),
                "*"
            )
        )
    ),
    "/"
);

b4.show();
