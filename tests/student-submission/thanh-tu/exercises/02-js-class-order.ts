interface Product {
    name: string;
    price: number;
    amount: number;
    discount: number;
}

class Order {
    orderID: number;
    customerName: string;
    items: Product[];
    totalAmount: number;

    constructor(orderID: number, customerName: string) {
        this.orderID = orderID;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
    }

    addItem(product: Product): void {
        this.items.push(product);
        this.calculatorTotal();
    }

    calculatorTotal(): void {
        this.totalAmount = this.items.reduce((total, item) => {
            const itemCost =
                item.price * item.amount * (1 - item.discount / 100);
            return total + itemCost;
        }, 0);
    }

    displayOrderInfo(): void {
        console.log(`Order ID: ${this.orderID}`);
        console.log(`Customer: ${this.customerName}`);
        console.log("Items:");
        this.items.forEach((item, index) => {
            console.log(`  No.${index + 1}: ${item.name}: $${item.price} x ${item.amount}, Discount: ${item.discount}%, Total: $${item.price * item.amount * (1 - item.discount / 100)}`);
        });
        console.log(`Total Amount: $${this.totalAmount}`);
    }
}

// const OrderA = new Order(1, "Diep Thanh Tu");
// OrderA.addItem({ name: "Laptop", price: 2000, amount: 1, discount: 15 });
// OrderA.addItem({ name: "Mouse", price: 500, amount: 1, discount: 0 });
// OrderA.addItem({ name: "Bag", price: 1000, amount: 1, discount: 50 });
// OrderA.displayOrderInfo();
