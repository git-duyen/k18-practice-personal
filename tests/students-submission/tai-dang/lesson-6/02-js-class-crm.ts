class TaiCustomer {
    id: number;
    name: string;
    email: string;
    phone: string;
    
    constructor(id: number, name: string, email: string, phone: string  ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    
    displayInfo() {
        console.log(`Customer ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
    }

    updateEmail(newEmail: string) {
        this.email = newEmail;
        console.log(`Email updated to: ${this.email}`);
    }
}

let customer1 = new TaiCustomer(1, "John Doe", "john.doe@example.com", "123-456-7890");
customer1.displayInfo();
customer1.updateEmail("john.newemail@example.com");
