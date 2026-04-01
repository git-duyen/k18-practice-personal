class Library {
  name: string;
  location: string;
  books: string[];

  constructor(name: string, location: string, books: string[]) {
    this.name = name;
    this.location = location;
    this.books = books;
  }
  addBook(book: string) {
    this.books.push(book);
  }
  findBook(keySearch: string) {
    let result: string[] = [];
    let keyModify = keySearch.trim().toLowerCase();
    this.books.forEach((book) => {
      if (book.toLowerCase().includes(keyModify)) {
        result.push(book);
      }
    });
    if (result.length === 0) {
      console.log("Cant find any book");
    } else {
      console.log(result);
    }
  }
}

//test
// const libNamDinh = new Library("Nam Dinh city", "123 Nguyen Du", [
//   "History of mankind",
//   "Fly to the moon",
//   "Fly with me baby",
// ]);
// console.log(libNamDinh);
// libNamDinh.addBook("libNamDinh", "Oh my gosh, this is shit");
// console.log(libNamDinh);
// libNamDinh.findBook("fly");
// libNamDinh.findBook("hi");
// libNamDinh.findBook("000");
