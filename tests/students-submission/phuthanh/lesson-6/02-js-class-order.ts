class Item {
  name: string;
  price: number;
  ammount: number;
  discount: number;

  constructor(name: string, price: number, ammount: number, discount: number) {
    this.name = name;
    this.price = price;
    this.ammount = ammount;
    this.discount = discount;
  }
}

class Order {
  orderId: string;
  customerName: string;
  items: Item[];
  totalAmount: number;

  constructor(
    orderId: string,
    customerName: string,
    items: Item[],
    totalAmount: number,
  ) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = items;
    this.totalAmount = totalAmount;
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  calculateTotal() {
    for (let i = 0; i < this.items.length; i++) {
      this.totalAmount +=
        (this.items[i].price *
          this.items[i].ammount *
          (100 - this.items[i].discount)) /
        100;
    }
  }
}

const item1 = new Item("Laptop", 2000000, 1, 10);
const item2 = new Item("Mouse", 300000, 2, 5);

const order = new Order("ORD001", "Nguyễn Phú Thành", [item1], 0);

order.calculateTotal();
console.log(order.totalAmount);

order.addItem(item2);
order.calculateTotal();
console.log(order.totalAmount);
