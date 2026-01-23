class Order {
    orderID;
    customerNam;
    items;
    totalAmount;

    constructor(orderID, customerNam, items, totalAmount) {
        this.orderID = orderID;
        this.customerNam = customerNam;
        this.items = items;
        this.totalAmount = totalAmount;
    }

    sayaddItem(item) {
        console.log(`addItem: ${item}`);
        this.items.push(item); // thêm item mới
    }

    saycalculateTotal() {
        let total = 0;

        for (const item of this.items) {
            total += item.price;
            console.log(`calculateTotal: ${total}`);
        }

        return total;
    }
}
const order1 = new Order(
    101,
    'Nguyen Van A',
    [
        { name: 'items1', price: 200 },
        { name: 'items2', price: 300 }
    ],
    500
);

const order2 = new Order(
    102,
    'Tran Thi B',
    [
        { name: 'items3', price: 400 },
        { name: 'items4', price: 400 }
    ],
    800
);

console.log(order1);
console.log(order2);

order1.sayaddItem({ name: 'items5', price: 150 });
order2.sayaddItem({ name: 'items6', price: 250 });

console.log(order1.saycalculateTotal());
console.log(order2.saycalculateTotal());
