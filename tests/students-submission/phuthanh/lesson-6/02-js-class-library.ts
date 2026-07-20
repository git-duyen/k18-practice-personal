class Book {
  title: string;
  author: string;
  description: string;

  constructor(title: string, author: string, description: string) {
    this.title = title;
    this.author = author;
    this.description = description;
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

  addBook(book: Book) {
    this.books.push(book);
  }

  findBook(title: string) {
    return this.books.filter((book) => book.title === title);
  }
}

const book1 = new Book(
  "Clean Code",
  "Robert C. Martin",
  "A Handbook of Agile Software Craftsmanship",
);

const book2 = new Book(
  "The Pragmatic Programmer",
  "Andrew Hunt",
  "Journey to mastery in software development",
);

const library = new Library("Thanh Library", "Ho Chi Minh", [book2]);

library.addBook(book1);

const result = library.findBook("Clean Code");
console.log(result);

console.log(library);
