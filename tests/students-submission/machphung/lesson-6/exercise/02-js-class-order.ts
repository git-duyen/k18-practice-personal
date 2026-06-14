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

	addItem(product: Product): void {
		this.items.push(product);
	}

	calculateTotal(): void {
		this.totalAmount = 0;
		this.items.forEach((product) => {
			const discountAmount =
				product.price * product.amount * (product.discount / 100);
			const finalPrice = product.price * product.amount - discountAmount;
			this.totalAmount += finalPrice;
		});
	}
}

const order1 = new Order(1, "Phung");
order1.addItem({ name: "Macbook Pro", price: 3000, amount: 1, discount: 10 });
order1.calculateTotal();

const order2 = new Order(2, "Sang");
order2.addItem({ name: "Laptop", price: 2000, amount: 2, discount: 15 });
order2.calculateTotal();

console.log(
	`Order ID: ${order1.orderId}, Customer: ${order1.customerName}, Total Amount: $${order1.totalAmount}`,
);
console.log(
	`Order ID: ${order2.orderId}, Customer: ${order2.customerName}, Total Amount: $${order2.totalAmount}`,
);
