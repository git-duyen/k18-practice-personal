interface Product {
    name: string;
    price: number;
    amount: number;
    discount: number;
}

class Order {
    orderId: number;
    customerName: string;
    items: Product[];
    totalAmount: number;
    constructor(orderId: number, customerName: string) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
    }

    addItem(product: Product) {
        this.items.push(product);
        console.log(`Đã thêm: "${product.name}" x ${product.amount}`);
    }

    calculateTotal(): number {
        this.totalAmount = this.items.reduce((sum, product) => {
            const discountedPrice = product.price * (1 - product.discount / 100);
            return sum + discountedPrice * product.amount;
        }, 0);

        return this.totalAmount;
    }
}