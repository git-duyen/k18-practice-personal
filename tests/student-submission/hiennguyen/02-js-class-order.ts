/*
Mô tả: 
Bạn đang làm việc cho một cửa hàng trực tuyến và cần tạo một hệ thống quản lý đơn hàng. 
Hãy tạo một class để lưu trữ thông tin đơn hàng và các phương thức để thao tác với dữ liệu này. 
Yêu cầu: 
- Tạo một class Order chứa các thuộc tính: orderId, customerName, items 
(mảng các sản phẩm), totalAmount. 
- Sản phẩm bao gồm các thuộc tính: name, price, amount, discount 
- Tạo một phương thức addItem để thêm sản phẩm vào đơn hàng. 
- Tạo một phương thức calculateTotal để tính tổng số tiền của đơn hàng. 
*/

interface Items {
  name: string;
  price: number;
  amount: number;
  discount: number;
}

class Order {
  public totalAmount: number = 0; // tổng số lượng
  public totalPrice: number = 0; // thêm totalPrice để in tổng tiền

  // khởi tạo giá trị đầu vào
  constructor(
    public orderId: string,
    public customerName: string,
    public items: Items[] = []
  ) {}

  // thêm sản phẩm vào đơn hàng
  addItem(name: string, price: number, amount: number, discount: number): void {
    this.items.push({ name, price, amount, discount });
    this.calculateTotal();
  }

  // tính tổng số tiền của đơn hàng
  calculateTotal(): void {
    this.totalAmount = this.items.reduce((sum, item) => sum + item.amount, 0);
    this.totalPrice = this.items.reduce(
      (sum, item) => sum + item.price * item.amount * (1 - item.discount),
      0
    );
  }

  displayOrder(): void {
    console.log(`orderId: ${this.orderId}`);
    console.log(`customerName: ${this.customerName}`);
    console.log(`items:`, this.items);
    console.log(`totalAmount: ${this.totalAmount.toLocaleString()} cái`);
    console.log(`totalPrice: ${this.totalPrice.toLocaleString()} vnđ`);
  }
}

// test
const order = new Order("A001", "Hien Nguyen");
order.addItem("Áo", 300_000, 2, 0.1);
order.addItem("Quần", 500_000, 1, 0);
order.displayOrder();
