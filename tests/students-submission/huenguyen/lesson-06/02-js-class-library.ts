class Library {
    name: string;
    location: string;
    books: string[];

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    // Thêm sách
    addBook(book: string): void {
        this.books.push(book);
    }

    // Tìm sách theo tiêu đề
    findBook(title: string): string | undefined {
        return this.books.find(book => book.toLowerCase() === title.toLowerCase());
    }
}

// Tạo thư viện
const library = new Library("Thư viện Quốc Gia", "Hà Nội");

// Thêm sách
library.addBook("Lập trình TypeScript");
library.addBook("JavaScript");
library.addBook("Python");

// Hiển thị danh sách
console.log(library.books);

// Tìm sách
const result = library.findBook("JavaScript");

if (result) {
    console.log("Đã tìm thấy:", result);
} else {
    console.log("Không tìm thấy sách.");
}