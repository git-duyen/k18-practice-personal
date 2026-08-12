class Order {
    orderID: number;
    customerName: string;
    items: { name:  string, price: number, amount:number, discount: number } [];
    totalAmount: number;

    constructor(orderID: number, customerName: string) {
        this.orderID = orderID;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
    }
    //Thêm sản phẩm
    addItem(name: string, price: number, amount: number, discount: number) {
        this.items.push({name,price,amount,discount});
    }

    //Tính tổng tiền
    calculateTotal () {
        let sum = 0;
        for (let item of this.items) {
            let itemTotal = item.price * item.amount * (1 - item
                .discount/100);
            sum += itemTotal;
        }
        this.totalAmount = sum;
        return sum;
    }
}
const order1 = new Order(101, "Nguyễn Văn A");
order1.addItem("Laptop", 20000, 1, 10);
order1.addItem("Chuột", 500, 2, 0);
console.log("Tổng tiền:", order1.calculateTotal());