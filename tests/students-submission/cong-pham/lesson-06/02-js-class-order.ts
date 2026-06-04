class Order {
  orderId: number;
  customerName: string;
  items: Product[];
  totalAmount: number;

  constructor(
    orderId: number,
    customerName: string,
    items: Product[],
    totalAmount: number,
  ) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = items;
    this.totalAmount = totalAmount;
  }

  addItem(item: Product): void {
    this.items.push(item);
  }

  calculateTotal(): void {
    this.totalAmount = this.items.reduce(
      (total, item) => total + item.price * item.amount * (1 - item.discount),
      0,
    );
    // let total = 0;
    // for (const item of this.items) {
    //   total += item.price * item.amount * (1 - item.discount);
    // }
    // this.totalAmount = total;
  }
}

interface Product {
  name: string;
  price: number;
  amount: number;
  discount: number;
}

const noodle = { name: "Noodle", price: 10, amount: 2, discount: 0.1 };
const rice = { name: "Rice", price: 20, amount: 1, discount: 0.2 };
const order = new Order(1, "Cong Pham", [noodle, rice], 0);
order.addItem({ name: "Bread", price: 5, amount: 3, discount: 0.05 });
order.addItem({ name: "Milk", price: 15, amount: 1, discount: 0.15 });
order.calculateTotal();
console.log(order);
