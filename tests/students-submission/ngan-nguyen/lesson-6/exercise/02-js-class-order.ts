interface Item {
    name: string;
    price: number;
    amount: number;
    discount: number;

}

class Order {
    items: Item[] = [];
    totalAmount: number = 0;
    constructor(public readonly orderId: string, public readonly customerName: string) {
    }
    // Thêm sản phẩm vào đơn hàng
    addItem(item: Item): void {
        // Kiểm tra sản phẩm invalid
        if (item.price <= 0 || item.amount <= 0 || item.discount < 0) {
            console.log(`Error: Product "${item.name}" has invalid data`);
            return;
        }
        // Kiểm tra sản phẩm đã tồn tại thì cộng lại số lượng
        const existItemIndex = this.items.findIndex(t => t.name === item.name);
        if (existItemIndex > -1) {
            console.log(`The item's name "${item.name}" already exists.`);
            const existItem = this.items[existItemIndex];
            existItem.amount += item.amount;
            console.log(`The quantity of product " ${item.name}" is ${existItem.amount}.`);
        } else {
            this.items.push(item);
            console.log(`Product ${item.name} is added.`);
        }
        this.calculateTotal();
    }
    // Tính tổng số tiền đơn hàng
    calculateTotal(): number {
        let calculateTotal = 0;
        for (const item of this.items) {
            const itemSubTotal = item.price * item.amount; // Tổng số tiền từng sản phẩm
            const itemDiscountAmount = itemSubTotal * item.discount; // Tổng số tiền khấu trừ
            const itemNetTotal = itemSubTotal - itemDiscountAmount; // Tổng số tiền NET của từng sản phẩm
            calculateTotal += itemNetTotal;
        }
        this.totalAmount = parseFloat(calculateTotal.toFixed(2)); // Làm tròn đến 2 chữ số thập phân
        return this.totalAmount;
    }
}

// Kiểm tra hoạt động
const order1 = new Order("ORD01", "Nguyen Van A");
console.log(`------------Order ID: ${order1.orderId}------------`);
const productA: Item = {
    name: "Laptop",
    price: 20_000_000,
    amount: 1,
    discount: 0.05 // 5%
};

const productB: Item = {
    name: "Camera",
    price: 5_000_000,
    amount: 2,
    discount: 0 // 0%
};

const productC: Item = {
    name: "Keyboard",
    price: 1_500_000,
    amount: 5,
    discount: 0.1 // 10%
};
// Kiểm tra phương thức thêm sản phẩm
order1.addItem(productA);
order1.addItem(productB);
order1.addItem(productC);

// Kiểm tra tổng số tiền đơn hàng
const total = order1.calculateTotal();
console.log(`Total price of order ${order1.orderId} is ${order1.totalAmount} `);

// Kiểm tra trường hợp sản phẩm đã tồn tại trong đơn hàng
console.log(`---------------------------------------`);
const order2 = new Order("ORD02", "Nguyen Van B");
console.log(`------------Order ID: ${order2.orderId}------------`);

const iPhone1: Item = { name: "iPhone 17", price: 30_500_000, amount: 1, discount: 0.1 };
const samsung1: Item = { name: "Samsung S25", price: 25_500_000, amount: 2, discount: 0 };
const iPhone2: Item = { name: "iPhone 17", price: 30_500_000, amount: 1, discount: 0.1 }; // Lặp lại sản phẩm

order2.addItem(iPhone1);
order2.addItem(samsung1);
order2.addItem(iPhone2);

console.log(`List products: `);
console.log(order2.items);
console.log(`Total price of order ${order2.orderId} is ${order2.totalAmount}`);

// Kiểm tra invalid data
console.log(`---------------------------------------`);
const order3 = new Order("ORD03", "Nguyen Van C");
console.log(`------------Order ID: ${order3.orderId}------------`);

const airpod: Item = { name: "airpod", price: 0, amount: 1, discount: 0.1 };
order3.addItem(airpod);
