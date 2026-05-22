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
        console.log(this.id, this.name, this.email, this.phone);
    }
    updateEmail(newEmail: string) {
        this.email = newEmail;
        console.log(this.email);
    }
}

const customer = new Customer(1, "Thanh Long", "thanhlong@gmail.com", "0909090909");    
customer.displayInfo();
customer.updateEmail("newemail@gmail.com");
customer.displayInfo();

