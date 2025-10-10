interface Book {
    title: string;
    author: string;
    id: string;
}

class Library {
    name: string;
    location: string;
    books: Book[] = [];

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
    }

    // Thêm sách vào thư viện
    addBook(book: Book): void {
        const existBook = this.books.some(b => b.id === book.id);
        if (existBook) {
            console.log(`The book with id ${book.id} ("${book.title}") already exists.`);
            return;
        }
        this.books.push(book);
        console.log(`The book "${book.title}" is added to library."`)

    }

    // Tìm sách trong thư viện
    findBook(title: string): Book[] {
        const searchTitle = title.toLowerCase().trim(); // Chuyển hết title sang chữ thường và cắt bỏ phần trắng 
        const searchBooks = this.books.filter(book => book.title.toLowerCase().includes(searchTitle));
        if (searchBooks.length === 0) {
            console.log(`Book Not Found- Try to searching with other titles`);
        } else if (searchBooks.length === 1) {
            console.log(`${searchBooks.length} result is found with title "${title}"`);
        } else {
            console.log(`${searchBooks.length} results are found with title "${title}"`);
        }
        return searchBooks;
    }
}

// Kiểm tra class có hoạt động đúng không
const myLibrary = new Library("Library A", "Ha Noi");
console.log(`---${myLibrary.name} is located in ${myLibrary.location}---`);
console.log('');

const book1: Book = {
    title: "Tôi là Bêtô",
    author: "Nguyễn Nhật Ánh",
    id: "1"
}

const book2: Book = {
    title: "Tôi thấy hoa vàng trên cỏ xanh",
    author: "Nguyễn Nhật Ánh",
    id: "2"
}

const book3: Book = {
    title: "Mắt Biếc",
    author: "Nguyễn Nhật Ánh",
    id: "3"
}

const book4: Book = {
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    id: "4"
}

const book5: Book = {
    title: "Hoàng tử bé",
    author: "Antoine de Saint-Exupéry",
    id: "5"
}

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.addBook(book1);
console.log('');

console.log(`---Searching book by title "tôi"--- `);
const result1 = myLibrary.findBook("tôi");
console.log(result1);
console.log('');

console.log(`---Searching book by title "hoa"--- `);
const result2 = myLibrary.findBook("hoa");
console.log(result2);
console.log('');

console.log(`---Searching book by title "Happy"--- `);
const result3 = myLibrary.findBook("Happy");
console.log(result3);

