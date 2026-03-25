interface Book {
    title: string;
    author: string;
}

class Library {
    name: string;
    location: string;
    books: Book[];

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    // findBook(title: string): Book | null {
    //     return this.books.find((book) => book.title.toLowerCase() === title.toLowerCase()) || null;
    // }

    findBook(title: string): Book | null {
        return this.books.find((book) => book.title.toLowerCase().includes(title.toLowerCase())) || null;
    }

    displayLibraryInfo(): void {
        console.log(`Library: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Books (${this.books.length}):`);
        this.books.forEach((book, index) => {
            console.log(` ${index + 1}. ${book.title} by ${book.author}`);
        });
    }
}

const library = new Library(
    "Children's Book Library",
    "123 Better Bytes Street",
);
library.addBook({ title: "Doraemon", author: "Fujiko Fujio" });
library.addBook({ title: "Truyện cổ Andersen", author: "Hans Christian Andersen" });
library.addBook({ title: "5 Centimet trên giây", author: "Shinkai Makoto" });
library.addBook({ title: "Harry Potter và Hòn đá Phù thủy", author: "J. K. Rowling" });
library.displayLibraryInfo();

console.log("\nFinding book...");
const findABook = library.findBook("Harry Potter");
if (findABook) {
    console.log(`Found: ${findABook.title} by ${findABook.author}`);
} else {
    console.log("Book not found");
}
