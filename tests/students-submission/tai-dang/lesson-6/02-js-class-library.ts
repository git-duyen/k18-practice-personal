class TaiLibrary {
    name: string;
    location: string;
    books: { title: string, author: string, year: number }[];

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    addBook(title: string, author: string, year: number) {
        this.books.push({ title, author, year });
    }
    findBooksByTitle(title: string) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }
}

// Example usage:
let taiLibrary = new TaiLibrary('Tai Library', '123 Main St');
taiLibrary.addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
taiLibrary.addBook('To Kill a Mockingbird', 'Harper Lee', 1960);
taiLibrary.addBook('Great Expectations', 'Charles Dickens', 1861);

let foundBooks = taiLibrary.findBooksByTitle('Great');
console.log("Books found with 'Great' in the title:");
foundBooks.forEach(book => console.log(`- ${book.title} by ${book.author} (${book.year})`));
