class Customer {

    constructor(private id: number, private name: string, private email: string, private phone: string) {
    }

    displayInfo() {
        console.log(`Id is:  ${this.id}`);
        console.log(`Name is:  ${this.name}`);
        console.log(`Email is:  ${this.email}`);
        console.log(`Phone is: ${this.phone}`);
    }

    updateEmail(newEmail: string) {
        this.email = newEmail;
        console.log(`New email is:  ${this.email}`);
    }
}

const cus1 = new Customer(1, "Thanh Phat", "abc@gmail.com", "969066565");

cus1.displayInfo();
cus1.updateEmail("dsgsd@gamail.com");