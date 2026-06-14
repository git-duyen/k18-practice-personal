class Customer {
	id: number;
	name: string;
	email: string;
	phone: string;

	constructor(id: number, name: string, email: string, phone: string) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
	}

	displayInfo(): void {
		console.log(
			`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`,
		);
	}

	updateEmail(newEmail: string): void {
		this.email = newEmail;
		console.log(`Email updated to: ${this.email}`);
	}
}

const customer1 = new Customer(
	1,
	"Phung",
	"mach.phung@example.com",
	"0901234568",
);
customer1.displayInfo();
customer1.updateEmail("mach.phung.new@example.com");
