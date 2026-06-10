interface Items {
    name: string;
    price: number;
    amount: number;
    discount: number;
};

class Order {
    //thuộc tính property
    orderId: number;
    customerName: string;
    items: Items[];
    totalAmount: number;

    //hàm khởi tạo constructor
    constructor(orderId: number, customerName: string, totalAmount: number) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = totalAmount;
    };
    //phương thức thêm sản phẩm vào giỏ hàng
    addItem(item: Items): void {
        this.items.push(item);
    };

    //phương thức tính tổng số tiền của đơn hàng
    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total = total + this.items[i].price * this.items[i].amount - this.items[i].discount;
        };
        return total = this.totalAmount;
    };

};
let item1: Items = { name: "Bánh mì", price: 15_000, amount: 2, discount: 0 };
let item2: Items = { name: "Nước ngọt", price: 10_000, amount: 1, discount: 0 };
let hoadon1 = new Order(1, "ThuNguyen", 40_000);
hoadon1.addItem(item1);
hoadon1.addItem(item2);
hoadon1.calculateTotal();
console.log(hoadon1);