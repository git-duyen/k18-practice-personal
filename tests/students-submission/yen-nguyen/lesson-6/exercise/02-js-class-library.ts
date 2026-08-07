type Book = {
    title: string;
    author: string;
    year: number;
};

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

    findBook(title: string): Book | undefined {
        return this.books.find((book) => book.title === title);
    }

    displayLibraryInfo(): string {
        return `Library Name: ${this.name}, Location: ${this.location}, Total Books: ${this.books.length}`;
    }
}

const library = new Library("City Library", "Ha Noi");

library.addBook({
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008
});

library.addBook({
    title: "JavaScript Basic",
    author: "John Doe",
    year: 2023
});

library.addBook({
    title: "TypeScript Handbook",
    author: "Microsoft",
    year: 2024
});

console.log(library.displayLibraryInfo());

const foundBook = library.findBook("Clean Code");

console.log(foundBook);