class Book {
    name: string;
    author: string;

    constructor(name: string, author: string) {
        this.name = name;
        this.author = author;
    }
}

class Library {
    name: string;
    location: string;
    books: Book[];

    constructor(name: string, location: string, books: Book[]) {
        this.name = name;
        this.location = location;
        this.books = books;
    }

    addBook(newBook: Book) {
        this.books.push(newBook);
        console.log(`Them ${newBook.name}`);
    }

    findBook(title: string) {
        const foundBook = this.books.find(book => book.name === title);

        if (foundBook) {
            console.log(`Tìm thấy: ${foundBook.name} - Tác giả: ${foundBook.author}`);
        } else {
            console.log(`Không tìm thấy sách có tiêu đề: "${title}"`);
        }
    }
}

const book1 = new Book("Doraemon", "Fuji");
const book2 = new Book("Conan", "Aoyama");
const library = new Library("Thu vien 1", "HN", []);

library.addBook(book1);
library.addBook(book2);

library.findBook("Conan");