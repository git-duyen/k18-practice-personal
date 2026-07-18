export class Order {
    orderId: number;
    customerName: string;
    items: { name: string; price: number; amount: number; discount: number; }[];
    totalAmount: number;

    constructor(orderId: number, customerName: string) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
    }

    addItem(item: { name: string; price: number; amount: number; discount: number; }) {
        this.items.push(item);
    }

    calculateTotal() {
        this.totalAmount = this.items.reduce((total, item) => {
            return total + item.price * item.amount * (1 - item.discount / 100);
        }, 0);

        return this.totalAmount;
    }
}

const order = new Order(1, "Huệ");

order.addItem({
    name: "Laptop",
    price: 15000000,
    amount: 1,
    discount: 10
});

order.addItem({
    name: "Mouse",
    price: 300000,
    amount: 2,
    discount: 5
});

console.log(order.calculateTotal());