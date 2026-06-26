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
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
    console.log(`Email updated to: ${this.email}`);
  }
}

const customer = new Customer(1, "Bryan", "bryan@gmail.com", "0909123456");
const customer2 = new Customer(2, "Alice", "alice@gmail.com", "0909123457");
const customer3 = new Customer(3, "Bob", " bob@gmail.com", "0909123458");

customer.displayInfo();
customer2.displayInfo();
customer3.displayInfo();

customer.updateEmail("bryan.updated@gmail.com");
customer2.updateEmail("alice.updated@gmail.com");
customer3.updateEmail("bob.updated@gmail.com");

customer.displayInfo();
customer2.displayInfo();
customer3.displayInfo();