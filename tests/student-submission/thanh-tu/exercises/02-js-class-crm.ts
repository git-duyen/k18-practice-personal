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
        console.log(`Phone Number: ${this.phone}`);
    }

    updateEmail(newEmail: string): void {
        this.email = newEmail;
    }
}

// const customerA = new customer(1,"Nguyen Van A","ngvana@example.com","0123456789");
// customerA.displayInfo();
// console.log("Cập nhật email mới cho khách hàng:")
// customerA.updateEmail("NgVanA@gmail.com");
// customerA.displayInfo();