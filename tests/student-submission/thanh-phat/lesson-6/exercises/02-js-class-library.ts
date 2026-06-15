interface Books {
    bookName: string,
    bookAuthor: string
}

class Library {
    books: Books[];
    constructor(private name: string, private location: string) {
        this.books = [];
    }

    addBook(book: Books) {
        this.books.push(book);
        console.log(`Đã thêm: "${book.bookName}" x ${book.bookAuthor}`);
    }

    findBook(bookName: string): Books | undefined {
        const result = this.books.find((book) => book.bookName.toLowerCase() === bookName.toLowerCase());
        if (result) {
            console.log(`Tìm thấy sách:`);
            console.log(`Tiêu đề : ${result.bookName}`);
            console.log(`Tác giả: ${result.bookAuthor}`);
        } else {
            console.log(`Không tìm thấy sách với tiêu đề: "${bookName}"`);
        }

        return result;
    }
}

const library = new Library("Thư viện Hà Nội", "Hà Nội");

library.addBook({bookName: "Sách thể thao", bookAuthor: "Xuân Diệu"});
library.addBook({bookName: "Thơ hè", bookAuthor: "Hồ Xuân Hương"});

library.findBook("Sách thể thao")