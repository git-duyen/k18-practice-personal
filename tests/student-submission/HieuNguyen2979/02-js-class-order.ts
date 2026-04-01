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
}

class Order {
  orderID: string;
  customerName: string;
  items: Item[];
  totalAmount: number;

  constructor(
    orderID: string,
    customerName: string,
    items: Item[],
    totalAmount: number,
  ) {
    this.orderID = orderID;
    this.customerName = customerName;
    this.items = items;
    this.totalAmount = totalAmount;
  }
  addItem(item: Item) {
    this.items.push(item);
  }
  calculateTotal() {
    const totalValue = this.items.reduce(
      (total, item) =>
        total + (item.price * item.amount * (100 - item.discount)) / 100,
      0,
    );
    console.log(totalValue);
  }
}

//test
// const item01 = new Item("ao somi", 12000, 1, 10);
// const item02 = new Item("quan au", 24000, 10, 80);
// const item03 = new Item("ao khoac", 100000, 2, 10);
// const order01 = new Order("01", "HieuNguyen", [item01, item02], 10);
// console.log(order01);
// order01.calculateTotal();
// order01.addItem("01", item03);
// order01.addItem("02", item03);
// console.log(order01);
// order01.calculateTotal();
