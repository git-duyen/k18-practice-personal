class Library {
    name: string;
    location: string;
    books: string[];

    constructor(name: string, location: string, books: string[]) {
        this.name = name;
        this.location = location;
        this.books = books;
    }

    addBook(book: string): void {
        this.books.push(book);
    }

    findBook(bookname: string): void {
        console.log("Kết quả tìm kiếm " + bookname);
        // for(let i = 0; i<this.books.length; i++){
        //     if(this.books[i].includes(bookname)){
        //         console.log(this.books[i]);
        //     }
        // }
        this.books.filter(n => n.includes(bookname))
            .forEach(function(book) { console.log(book); }
            )
    }
}

const ctLibrary = new Library("Trung tam", "VN", ["Toan 1", "Toan 2", "TV 2"]);
ctLibrary.addBook("TA 1");
ctLibrary.findBook("2");

