
interface Books {
    title: string;
    author: string;
}
class Library {
    name: string
    location: string;
    books: Books[];

    constructor(name: string, location: string, books: Books[]=[]) {
        this.name = name;
        this.location = location;
        this.books = books;
    }

    addBook(book: Books) {
        this.books.push(book);
        console.log(`Đã thêm thành công: ${book.title}`);
    }

    findBook(title: string) {
        const foundBook = this.books.find(book => book.title === title);
        if (foundBook) {
            console.log(`Đã tìm thấy: ${foundBook.title}`);
        } else {
            console.log(`Không tìm thấy: ${title}`);
        }
    }
}

const library = new Library("Thư viện", "Hà Nội");
library.addBook({ title: "Sách 1", author: "Tác giả 1" });
library.addBook({ title: "Sách 2", author: "Tác giả 2" });
library.findBook("Sách 2");
library.findBook("Sách 3");