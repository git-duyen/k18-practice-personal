class Library {
  name: string;
  location: string;
  books: { title: string; author: string }[];

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
    this.books = [];
  }

  addBook(title: string, author: string): void {
    this.books.push({ title, author });
    console.log(`Added book: ${title}`);
  }

  findBook(title: string): void {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === title) {
        console.log(`Found: ${this.books[i].title} - ${this.books[i].author}`);
        return;
      }
    }
    console.log(`Book "${title}" not found`);
  }
}

// Test
const library = new Library("City Library", "Ho Chi Minh");
library.addBook("Dế mèn phiêu lưu ký", "Tô Hoài");
library.addBook("Kính Vạn Hoa", "Nguyễn Nhật Ánh");
library.findBook("Dế mèn phiêu lưu ký");
library.findBook("Harry Potter");