class Library {
  name: string;
  location: string;
  books: string[];
  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
    this.books = [];
  }
  addBook(book: string): void {
    this.books.push(book);
  }
  findBook(book: string): boolean {
    return this.books.includes(book);
  }
}
const vanHoc = new Library("Van Hoc", "Hanoi");
vanHoc.addBook("ABC");
vanHoc.addBook("DEF");
console.log(`Danh sách books hiện tại: ${vanHoc.books}`);
console.log(`Tìm cuốn sách: ${vanHoc.findBook("DEF")}`);
