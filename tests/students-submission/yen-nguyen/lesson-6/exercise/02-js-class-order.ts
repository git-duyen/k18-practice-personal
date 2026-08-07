type Product ={
    name: string;
    price: number;
    amount : number;
    discount : number;
};

class Order{
    orderId: number;
    customerName: string;
    items: Product[];
    totalAmount: number;

    addItem(product: Product): void{
        this.items.push(product);
        this.totalAmount = this.calculateTotal();
    }

    constructor(orderId: number, customerName: string, products: Product[]){
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = products;
        this.totalAmount = this.calculateTotal();
    }

    calculateTotal(): number{
        let total = 0;
        for(const product of this.items){
            total += (product.price * product.amount) * (1 - product.discount / 100);
        }
        return total;
    }

    displayOrderInfo(): string{
        return `Order ID: ${this.orderId}, Customer Name: ${this.customerName}, Total Amount: ${this.totalAmount}`;
    }
}

const orders: Order[] = [];

orders.push(new Order(1, "John Doe", []));
orders.push(new Order(2, "Jane Smith", []));

orders[0].addItem({
    name: "Product A",
    price: 100,
    amount: 2,
    discount: 10
});

orders[0].addItem({
    name: "Product B",
    price: 200,
    amount: 1,
    discount: 20
});

orders[0].addItem({
    name: "Product E",
    price: 300,
    amount: 1,
    discount: 10
});

orders[1].addItem({
    name: "Product C",
    price: 150,
    amount: 3,
    discount: 15
});

orders[1].addItem({
    name: "Product D",
    price: 250,
    amount: 1,
    discount: 5
});

orders[1].addItem({
    name: "Product F",
    price: 100,
    amount: 2,
    discount: 0
});

for (const order of orders) {
    console.log(order.displayOrderInfo());
};