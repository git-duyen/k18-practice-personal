class Library {
    name: string;
    location: string;
    books: any[];

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    // Thêm sách vào thư viện
    addBook(title: string, author: string) {
        this.books.push({ title, author });
    }
    findBook(title: string) {
        for (let book of this.books) {
            if (book.title === title) {
                console.log("Tìm thấy sách:", book.title, "-", book.author);
                return;
            }
        }
        console.log("Không tìm thấy sách này.");
    }
}
//Hiển thị thông tin sách
const myLibrary = new Library("Thư viện Hà Nội", "Hà Nội");
myLibrary.addBook("JavaScript cơ bản", "Đào Mai Chi");
myLibrary.addBook("TypeScript nhập môn", "Trần Thị Trang");

myLibrary.findBook("TypeScript nhập môn");   
myLibrary.findBook("Python nâng cao");   