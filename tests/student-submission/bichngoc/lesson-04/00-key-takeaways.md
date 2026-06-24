### 1. Phạm vi của biến
- Block scope (khối): biến được khai báo trong cặp ngoặc nhọn
    - var: không bị giới hạn bởi {}
    - let/ const: bị giới hạn bởi {}, ra ngoài bị undefined

- Function scope (hàm): biến được khai báo trong 1 hàm
    - Cả let/ var/ const ra ngoài hàm đều bị undefined

- Toàn cục (global): biến được khai báo ở 1 dòng code tự do, không nằm trong khối hay hàm

### 2. Javascript- break & continue
- break: thoát hoàn toàn khỏi vòng lặp ngay lập tức
```
const numbers = [1, 3, 8, 7, 9, 10, 11];
let firstEven = null;

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
        firstEven = num;
        break;
    }
}
console.log(`So chan dau tien: ${firstEven}`);
```
- continue: dùng để bỏ qua phần còn lại của vòng lặp và chuyển sang lần lặp tiếp theo
```
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Bỏ qua các số chẵn
    }
    console.log(i); // Chỉ in ra các số lẻ
}
```
### 3. Javascript- câu ĐK
- if...else
```
let score = 100;
if (score >= 90) {
    console.log("Bạn đã qua môn");
} else {
    console.log("Bạn cần học lại");
}
```
- if...else...if
```
let score = 95;
if (score >= 90) {
    console.log("Giỏi");
} else if (score >= 80) {
    console.log("Khá");
} else if (score >= 70) {
    console.log("TB");
} else {
    console.log("Yếu");
}
```
- Cách viết ngắn gọn cho if...else đơn giản
```
const age = 20;
let xepHang = age > 18 ? `Người lớn` : `Trẻ em`;
console.log(xepHang);
```
### 4. Javascript- Loop
- for...in Loop: duyệt qua các thuộc tính của object
```
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (const key in person) {
    console.log(key);
}
```
- forEach: thực thi 1 function cho mỗi phần từ, không thể dùng break và continue
```
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(value) {
    console.log(value);
});
```
### 5. Javascript- Utils function
- String:
```
// Bỏ khoảng trắng
let text = "   Hello World!   ";
console.log(text.trim()); // "Hello World!"
console.log(text.trimStart()); // "Hello World!   "
console.log(text.trimEnd()); // "   Hello World!"


// Chuyển đổi chữ hoa và chữ thường
let str = "JavaScript";
console.log(str.toLocaleLowerCase()); // "javascript"
console.log(str.toLocaleUpperCase()); // "JAVASCRIPT"


// Kiểm tra sự tồn tại của chuỗi con
let text = "   Hello World!   ";
console.log(text.includes("World")); // true
console.log(text.includes("world")); // false


// Tách chuỗi thành mảng
let text = "Hello World!";
console.log(text.split(" ")); // ["Hello", "World!"]

let email = "user@example.com";
console.log(email.split("@")); // ["user", "example.com"]


// Thay thế chuỗi con
let text = "Hello World!";
console.log(text.replace("World", "JavaScript")); // "Hello JavaScript!"
```

- Array:
```
let arr = [1, 2, 3, 4];
// Thêm phần tử cuối
arr.push(5);
console.log(arr);

// Thêm phần tử đầu
arr.unshift(0);
console.log(arr);

// Thên phần tử vào giữa
arr.splice(2, 0, 1.5)
console.log(arr);

// Xóa ở cuối
arr.pop();
console.log(arr);

// Xóa ở đầu
arr.shift();
console.log(arr);

//Xóa ở vị trí bất kỳ
arr.splice(1, 1);
console.log(arr);

// Tìm kiếm phần tử đầu tiên hợp lệ
const number = [5, 12, 8, 130];
let first = number.find(num => num > 10);
console.log(first);

// Tìm kiếm tất cả phần tử hợp lệ
let all = number.filter(num => num > 10);
console.log(all);


// Nhân mỗi phần tử với 2
const numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num*2);
console.log(doubled);


// Sắp xếp tăng dần
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Sắp xếp giảm dần
numbers.sort((a, b) => b - a);
console.log(numbers);
```





