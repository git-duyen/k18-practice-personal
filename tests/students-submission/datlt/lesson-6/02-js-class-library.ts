class Library {
    name: string;
    location: string;
    books: Book[];
    
    constructor(name: string, location: string, books: Book[]) {
        this.name = name;
        this.location = location;
        this.books = books;
    }
    
    displayInfo() : void {
        console.log("Library Information:");
        console.log(`Library Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Books: ${this.books.map(book => book.name).join(", ")}`);
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    findBook(name: string): Book | undefined {
        return this.books.find(book => book.name === name);
    }
}

class Book {
    name: string;
    description: string;
    
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
    
    displayInfo() : void {
        console.log(`Book: ${this.name}`);
        console.log(`Description: ${this.description}`);
    }
}

const library = new Library("datlt", "HCM", []);
const book1 = new Book("Apple", "This is a book about Apple");
const book2 = new Book("Banana", "This is a book about Banana");
library.addBook(book1);
library.addBook(book2);
library.displayInfo();
console.log(library.findBook("Apple"));
