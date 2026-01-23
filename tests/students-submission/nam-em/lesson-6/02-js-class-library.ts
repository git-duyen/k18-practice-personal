//
class Library {
    constructor(name, location) {
        this.name = name;
        this.books = [];
        this.location = location;
    }
    addBook(book) {
        this.books.push(book);
    }
    findBook(title) {
        return this.books.find(book => book.title === title);
    }
}
const myLibrary = new Library("City Library");
myLibrary.addBook({ title: "1984", author: "George Orwell" });
myLibrary.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee" });
console.log(myLibrary.findBook("1984"));    // { title: "1984", author: "George Orwell" }
console.log(myLibrary.findBook("The Great Gatsby")); // undefined
