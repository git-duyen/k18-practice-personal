class Order {
  orderId: number;
  customerName: string;
  items: { name: string; price: number; amount: number; discount: number }[];
  totalAmount: number;

  constructor(orderId: number, customerName: string) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = [];
    this.totalAmount = 0;
  }

  addItem(name: string, price: number, amount: number, discount: number): void {
    this.items.push({ name, price, amount, discount });
    console.log(`Added: ${name}`);
  }

  calculateTotal(): void {
    this.totalAmount = 0;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const priceAfterDiscount = item.price - (item.price * item.discount / 100);
      this.totalAmount = this.totalAmount + priceAfterDiscount * item.amount;
    }
    console.log(`Total: ${this.totalAmount}`);
  }
}

// Test
const order = new Order(1, "Bryan");
order.addItem("Laptop", 1000, 1, 10);
order.addItem("Mouse", 50, 2, 5);
order.addItem("Keyboard", 55.95, 1, 0);
order.calculateTotal();