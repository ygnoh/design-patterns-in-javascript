const BookShelf = require("./book-shelf.js");
const Book = require("./book.js");

const bookShelf = new BookShelf();

bookShelf.appendBook(new Book("Around the World in 80 Days"));
bookShelf.appendBook(new Book("Bible"));
bookShelf.appendBook(new Book("Cinderella"));
bookShelf.appendBook(new Book("Daddy-Long-Legs"));

const iter = bookShelf.iterator();

while (iter.hasNext()) {
    const book = iter.next();

    console.log(book.name);
}
