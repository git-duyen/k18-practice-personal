export {};

class Order {
    orderId: number;
    customerName: string;
    items: Item[];
    totalAmount: number;
    
    constructor(orderId: number, customerName: string, items: Item[], totalAmount: number) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = totalAmount;
    }
    
    displayInfo() : void {
        console.log("Order Information:");
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Customer Name: ${this.customerName}`);
        console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
        console.log(`Total Amount: ${this.totalAmount}`);
    }

    addItem(item: Item): void {
        this.items.push(item);
        this.totalAmount += item.price * item.amount;
    }

    calculateTotal(): number {
        return this.totalAmount;
    }
}

class Item {
    name: string;
    price: number;
    amount: number;
    discount: number;
    
    constructor(name: string, price: number, amount: number, discount: number) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.discount = discount;
    }
    
    displayInfo() : void {
        console.log(`Item: ${this.name}`);
        console.log(`Price: ${this.price}`);
        console.log(`Amount: ${this.amount}`);
        console.log(`Discount: ${this.discount}`);
    }
}

const order = new Order(1, "datlt", [], 0);
const item = new Item("Apple", 10000, 5, 0.1);
order.addItem(item);
order.displayInfo();
order.calculateTotal();
