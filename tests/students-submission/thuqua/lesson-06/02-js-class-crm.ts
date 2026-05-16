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

    displayInfo() {
        console.log(`ID is ${this.id}`);
        console.log(`My name is ${this.name}`);
        console.log(`Email is ${this.email}`);
        console.log(`Phone is ${this.phone}`);
    }

    updateEmail(newEmail: string) {
        this.email = newEmail;
        console.log(`New Email ${this.email}`);
    }
}
const customer1 = new Customer(1, "Nancy", "nancy@gmail.com", "0991205001");

// Hien thi thong tin
customer1.displayInfo();

// Cap nhat Email
customer1.updateEmail("nancy1@gmail.com");

// Hien thi lai thong tin
customer1.displayInfo();
