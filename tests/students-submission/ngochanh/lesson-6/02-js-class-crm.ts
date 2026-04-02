class Customer {
    id: string;
    name: string;
    email: string;
    phone: string;

    constructor(id: string, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo() {
        console.log(`ID: ${this.id} - Tên khách hàng: ${this.name} - Email: ${this.email} - Phone number: ${this.phone}`);
    }

    updateEmail(newEmail: string): void {
        this.email = newEmail;
    }
}

const hanh = new Customer("SD1", "Ngoc Hanh", "ngochanh@gmail.com", "0123456789");
hanh.displayInfo();
hanh.updateEmail("new-ngochanh@gmail.com");
hanh.displayInfo();