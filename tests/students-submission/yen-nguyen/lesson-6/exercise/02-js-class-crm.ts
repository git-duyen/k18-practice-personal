
class Customer{
    id: number;
    name: string;
    email: string;
    phone: string;
    
    constructor(id: number, name: string, email: string, phone: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo(): string{
        return `Customer ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }

    updateEmail(newEmail: string): void{
        this.email = newEmail;
    }
}

const customers: Customer[] = [];
customers.push(new Customer(1, "John Doe", "john.doe@example.com", "123-456-7890"));
customers.push(new Customer(2, "Jane Smith", "jane.smith@example.com", "098-765-4321"));
customers.push(new Customer(3, "Alice Johnson", "alice.johnson@example.com", "555-555-5555"));

customers.forEach(customer => {
    console.log(customer.displayInfo());
    console.log(`Email before update: ${customer.email}`);
    customer.updateEmail(`updated_${customer.email}`);
    console.log(`Email after update: ${customer.email}`);
    console.log('-----------------------------');
});