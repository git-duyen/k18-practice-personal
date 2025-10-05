interface Book {
  title: string;
  author: string;
}

class LibraryTS {
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

  // Tìm kiếm không phân biệt hoa thường
  findBook(title: string): Book | null {
    return this.books.find(book => book.title.toLowerCase() === title.toLowerCase()) || null;
  }

  displayLibraryInfo(): void {
    console.log(`Library: ${this.name}`);
    console.log(`Location: ${this.location}`);
    console.log(`Books (${this.books.length}):`);
    this.books.forEach((book, index) => {
      console.log(` ${index + 1}. ${book.title} by ${book.author})`);
    });
  }
}

const libraryTS = new LibraryTS("City Library", "123 Main Street");
libraryTS.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald" });
libraryTS.addBook({ title: "1984", author: "George Orwell" });
libraryTS.displayLibraryInfo();

console.log("\nFinding book:");
const foundBook = libraryTS.findBook("1984");
if (foundBook) {
  console.log(`Found: ${foundBook.title} by ${foundBook.author})`);
} else {
  console.log("Book not found");
}
