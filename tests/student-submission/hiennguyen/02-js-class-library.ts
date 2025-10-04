/* Mô tả: Bạn đang xây dựng một ứng dụng quản lý thư viện. 
Hãy tạo một class để lưu trữ thông tin sách và các phương thức để thao tác với dữ liệu này. 
Yêu cầu: 
- Tạo một class Library chứa các thuộc tính: name, location, books (mảng các sách). 
- Tạo một phương thức addBook để thêm sách vào thư viện. 
- Tạo một phương thức findBook để tìm sách theo tiêu đề. 
*/

interface Book {
  title: string;
  quantity: number;
}

class Library {
  constructor(
    public name: string,
    public location: string,
    public books: Book[] = []
  ) {}

  addBook(title: string, quantity: number): void {
    this.books.push({ title, quantity });
  }

  findBook(title: string) {
    return this.books.find(
      (b) => b.title.toLowerCase() === title.toLowerCase()
    );
  }
}

// test
const library = new Library("Fahasa", "HCM");
library.addBook("Conan", 10);
library.addBook("Doraemon", 100);
library.addBook("One Piece", 30);

console.log(library);
console.log(`Sách cần tìm là:`, library.findBook("doraemon"));


