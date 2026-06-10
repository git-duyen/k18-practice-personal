interface Book {
    book_name: string;
    book_id: number;
}
class Library {
    //thuộc tính
    category;
    location;
    books: Book[];

    //contruction
    constructor(category: string, location: string) {
        this.category = category;
        this.location = location;
        this.books = [];
    };

    //Phương thức thêm sách vào thư viện
    addBook(books: Book): void {
        this.books.push(books);
    };
    //Phương thức tìm sách theo tiêu đề
    finBook(tensach: string) {
        let result: Book[] = []; // khai báo biến result với kiểu Book với giá trị khởi tạo là 1 mảng rỗng.
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].book_name.includes(tensach)) {
                result.push(this.books[i]);
            };

        };
        return result;
    };
};
let sach1: Book = { book_name: "Kham pha the gioi", book_id: 34 };
let sach2: Book = { book_name: "Toan lop 1", book_id: 12 };
let sach3: Book = { book_name: "Toan lop 2", book_id: 13 };
let Thuvien1 = new Library("Sách trẻ em", "Tủ 1 - hàng 2");
Thuvien1.addBook(sach1);
Thuvien1.addBook(sach2);
Thuvien1.addBook(sach3);
console.log(Thuvien1);
const ketqua = Thuvien1.finBook("Toan");
console.log(ketqua);


