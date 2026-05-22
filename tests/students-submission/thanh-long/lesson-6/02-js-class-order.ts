class Product {
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
    orderId: number;
    customerName: string;
    items: Product[];
    totalAmount: number;

    constructor(orderId: number, customerName: string, items: Product[] = [], totalAmount: number = 0) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = totalAmount;
    }

    addItem(newProduct: Product) {
        this.items.push(newProduct);
        console.log(`Đã thêm thành công: ${newProduct.name}`);
    }

    calculateTotal() {
        this.totalAmount = this.items.reduce((total, item) => {
            return total + item.price * item.amount * (1 - item.discount / 100);
        }, 0);
        console.log(this.totalAmount);
    }
}


const myOrder = new Order(101, "Thanh Long");
myOrder.addItem(new Product("Product 1", 150000, 1, 10));
myOrder.addItem(new Product("Product 2", 28000, 2, 20));
myOrder.addItem(new Product("Product 3", 390000, 3, 30));
console.log(myOrder.items);

myOrder.calculateTotal();
console.log('Tổng tiền: ' + myOrder.totalAmount);