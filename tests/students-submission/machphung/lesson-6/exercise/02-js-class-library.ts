class Library {
	name: string;
	location: string;
	books: string[];

	constructor(name: string, location: string) {
		this.name = name;
		this.location = location;
		this.books = [];
	}

	addBook(book: string) {
		this.books.push(book);
	}

	findBook(book: string): boolean {
		return this.books.includes(book);
	}
}

const library = new Library(
	"Thư viện Khoa học Tổng hợp TP.HCM",
	"69 Lý Tự Trọng, Quận 1",
);
library.addBook("Think and Grow Rich");
library.addBook("Thinking, Fast and Slow");
library.addBook("The Power of Now");
console.log(library);
console.log(library.findBook("Think and Grow Rich"));
console.log(library.findBook("The 7 Habits of Highly Effective People"));
