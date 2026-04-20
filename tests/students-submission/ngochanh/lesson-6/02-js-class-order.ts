type Product = {
    name: string;
    price: number;
    amount: number;
    discount: number;
}

class Order {
    orderId: string;
    customerName: string;
    items: Product[];
    totalAmount: number;

    constructor(orderId: string, customerName: string, items: Product[]) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = 0;
    }

    addItem(item: Product): void {
        this.items.push(item);
    }

    calculateTotal(): number {
        // for (let i = 0; i < this.items.length; i++) {
        //     this.totalAmount += this.items[i].price * this.items[i].amount - this.items[i].discount;
        // }
        // return this.totalAmount;
        this.totalAmount = this.items.reduce((total, item) => {
            return total + (item.price * item.amount) - item.discount;
        }, 0);
        return this.totalAmount;
    }
}

const Kitkat: Product = {
    name: "Kitkat Matcha",
    price: 6,
    amount: 2,
    discount: 2
}

const Oreo: Product = {
    name: "Oreo",
    price: 4,
    amount: 3,
    discount: 2
}

let hanhOrder = new Order("ID01", "Ngoc Hanh", [Kitkat, Oreo]);
hanhOrder.addItem(Kitkat);
hanhOrder.addItem(Oreo);
console.log(hanhOrder.calculateTotal());
hanhOrder.addItem(Kitkat);
hanhOrder.addItem(Oreo);
console.log(hanhOrder.calculateTotal());