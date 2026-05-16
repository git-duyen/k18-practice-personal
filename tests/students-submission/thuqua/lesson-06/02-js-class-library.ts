interface Book {
    title: string;
    author: string;
}

class Library {
    name: string;
    location: string;
    books: Book[];

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    // Thêm sách vào thư viện
    addBook(book: Book): void {
        this.books.push(book);
    }

    // Tìm sách
    findBook(title: string): Book | undefined {
        let foundBook = this.books.find(
            book => book.title.toLowerCase().includes(title.toLowerCase())
        );

        if (foundBook) {
            console.log("Đã tìm thấy", foundBook);
        } else {
            console.log("Không tìm thấy");
        }

        return foundBook;
    }

}

// Tạo thư viện
const library1 = new Library("Thư viện Quảng Nam", "Điện Bàn");

// Thêm sách
library1.addBook({
    title: "Tôi thấy hoa vàng trên cỏ xanh",
    author: "Nguyễn Nhật Ánh"
});

library1.addBook({
    title: "Dế mèn phiêu lưu ký",
    author: "Tô Hoài"
});

// Tìm sách
library1.findBook("Tôi thấy hoa vàng");

