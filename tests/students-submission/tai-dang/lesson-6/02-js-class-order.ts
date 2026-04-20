class TaiOrder {
        orderId: number;
        customerName: string;
        items: { name: string, price: number, amount: number, discount: number }[];
        totalAmount: number;

    constructor(orderId: number,customerName: string, items: { name: string, price: number, amount: number, discount: number }[], totalAmount: number) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = totalAmount;
    }

    addItem(name: string, price: number, amount: number, discount: number) {
        this.items.push({ name, price, amount, discount });
    }

    calculateTotalAmount() {
        this.totalAmount = this.items.reduce((total, item) => {
            const itemTotal = item.price * item.amount * (1 - item.discount);
            return total + itemTotal;
        }, 0);
    }
    
}
// Example usage:
let taiOrder = new TaiOrder(1, 'John Doe', [], 0);
taiOrder.addItem('Mouse', 50, 2, 0.05);
taiOrder.addItem('Laptop', 100, 2, 0.05);

taiOrder.calculateTotalAmount();
console.log("Total Amount: $" + taiOrder.totalAmount); 

