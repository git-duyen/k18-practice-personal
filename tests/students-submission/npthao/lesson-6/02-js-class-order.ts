class Product {
    name: string;
    price: number;
    amount: number;
    discount: number;

    constructor(name: string, price: number, amount: number, discount: number){
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.discount = discount;
    }
}

class Orders {
    orderID: number;
    customerName: string;
    items: Product[];
    totalAmount: number;

    constructor(orderID: number, customerName: string, items:Product[], totalAmount: number){
        this.orderID = orderID;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = totalAmount;
    }

    addItem(newProduct: Product){
        this.items.push(newProduct);
        console.log(`Thêm sản phẩm thành công ${newProduct.name}`)
    }
    calculateTotal(){
        this.totalAmount = this.items.reduce((total, item) => {
            return total + item.price * item.amount * (1 - item.discount / 100);

        }, 0);
        console.log(this.totalAmount);
    }
    
}