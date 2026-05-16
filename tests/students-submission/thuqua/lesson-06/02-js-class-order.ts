interface Product {
    name: string;
    price: number;
    amount: number;
    discount: number;
}

// Tạo class Order
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

    // Thêm sản phẩm
    addItem(product: Product): void {
        this.items.push(product);
    }

    // Tính tổng
    calculateTotal(): number {
        let total = 0;

        for (let item of this.items) {
            total += Math.max(0, (item.price * item.amount) - item.discount);
        }

        this.totalAmount = total;
        return total;
    }
}

// Tạo sản phẩm
let product1: Product = {
    name: "Áo thun",
    price: 200000,
    amount: 5,
    discount: 50000
};

let product2: Product = {
    name: "Áo sơ mi",
    price: 300000,
    amount: 2,
    discount: 30000
};

let product3: Product = {
    name: "Áo khoác",
    price: 500000,
    amount: 1,
    discount: 100000
};

// Tạo đơn hàng
let order1 = new Order(1, "Thu Qua");
let order2 = new Order(2, "Thu Sen");

// Thêm sản phẩm vào đơn hàng
order1.addItem(product1);
order1.addItem(product2);

order2.addItem(product3);


// Kết quả
console.log("Tong tien:", order1.calculateTotal());
console.log("Tong tien:", order2.calculateTotal());

