# Javascript
## 1. Phạm vi (scope) của biến
Có 3 loại:
- **Toàn cục (global)**: biến khai báo ngoài mọi hàm/khối → có thể truy cập ở bất kỳ đâu
```js
let global = "Tôi là biến toàn cục";

function testFunction() {
    console.log(global); // Truy cập được
}
```
- **Function scope (hàm)**: biến chỉ tồn tại trong phạm vi hàm mà nó được khai báo.
```js
function myFunction() {
var functionScoped = "Chỉ có thể truy cập trong hàm này";
let alsoFunctionScoped = "Tương tự";

console.log(functionScoped); // OK
}

console.log(functionScoped); // Error: functionScoped is not defined
```
- **Block scope (khối)** biến khai báo bằng `let` hoặc `const` chỉ tồn tại trong cặp `{ }`.
`var` thì không tuân theo block scope (nó “thoát” ra ngoài block).
```js
for (var i = 0; i < 3; i++) {}
console.log(i); // OK, in ra 3

for (let j = 0; j < 3; j++) {}
console.log(j); // ❌ Error: j is not defined
```
## 2. Break và continue
- **Break** thoát hoàn toàn khỏi vòng lặp khi thỏa điều kiện
```js
// Vòng lặp từ 10 đến 20
// dừng lại khi gặp phần tử chia hết cho 3 đầu tiên

for (let i = 10; i <= 20; i++) {
    if (i % 3 === 0) {
        break;
    };
    console.log(i);
};
```
- **Continue** bỏ qua nội dung còn lại của vòng lặp hiện tại khi thỏa điều kiện, chuyển tiếp sang vòng lặp tiếp theo
```js
// vòng lặp từ 1 đến 20
// bỏ qua các giá trị chẵn, chỉ in ra giá trị lẻ

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    };
    console.log(i);
};
```
## 3. Câu điều kiện nâng cao
- **if...else** và **if...else...if**
```js
// Khai báo biến thứ trong tuần (dạng số)
// CN = 1, T2 = 2,...
// Nếu số = 1 thì in ra CN,...

const today = 7;

if (today === 1) {
    console.log('CN');
} else if (today === 2) {
    console.log('T2');
} else if (today === 3) {
    console.log('T3');
} else if (today === 4) {
    console.log('T4');
} else if (today === 5) {
    console.log('T5');
} else if (today === 6) {
    console.log('T6');
} else {
    console.log('T7');
};
```
- **Ternary operator (toán tử điều kiện)**: cách rút gọn của if...else. **Sử dụng ? và :**
```js
// 2 biến age, status
// age >= 65 => stt "nghỉ hưu"
// age < 65 => stt "lao động"
// in stt

const age = 65;
let status = (age >= 65) ? "Nghỉ hưu" : "Lao động";
console.log(status);

// Có thể lồng nhau:
let score = 75;
let grade = score >= 90 ? "A" :
score >= 80 ? "B" :
score >= 70 ? "C" :
score >= 60 ? "D" : "F";
```

## 4. Vòng lặp
- **4.1. for (let i = 0; i < n; i++)**
```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// In ra: 0 1 2 3 4
```
- **4.2. for...of** lặp qua giá trị của các phần tử trong object, array, string...
```js
const arr = ["a", "b", "c"];
for (const value of arr) {
    console.log(value);
}
// In ra: a b c
```
- **4.3. for...in** lặp qua key (thuộc tính) của object hoặc index của mảng
```js
// với object
const obj = { name: "Hien", age: 29 };
for (const key in obj) {
    console.log(key, obj[key]);
}
// In ra:
// name Hien
// age 29
```
```js
// với array
const arr = ["x", "y", "z"];
for (const index in arr) {
    console.log(index, arr[index]);
}
// In ra:
// 0 x
// 1 y
// 2 z
```
- **4.4. forEach() Method** lặp qua từng phần tử của mảng và chạy callback function cho mỗi phần tử
- Cú pháp
```js
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => { 
    console.log("Mảng gốc:", fruits);   // cả mảng
    console.log("Index:", index);       // số thứ tự
    console.log("Phần tử hiện tại:", fruit); // giá trị phần tử
    console.log("----");
});
// Khi dùng forEach, callback luôn có tối đa 3 tham số:
// 1.giá trị phần tử (đặt tên gì cũng được, ví dụ fruit => đây là tên biến đại diện cho từng phần tử trong mảng)
// 2.chỉ số index (ví dụ index)
// 3.chính mảng gốc (ít khi dùng, nhưng có thể thêm làm tham số thứ 3)
// in ra:
Mảng gốc: [ 'apple', 'banana', 'cherry' ]
Index: 0
Phần tử hiện tại: apple
----
Mảng gốc: [ 'apple', 'banana', 'cherry' ]
Index: 1
Phần tử hiện tại: banana
----
Mảng gốc: [ 'apple', 'banana', 'cherry' ]
Index: 2
Phần tử hiện tại: cherry
----
```

## 5. Utils function
- Là các hàm có sẵn của JavaScript, giúp việc code trở nên nhanh hơn.
- **String utils**: các hàm xử lý chuỗi
- **Array utils**: các hàm xử lý mảng
### 5.1. String utils
- **trim()**: cắt khoảng trắng hai đầu
    - trimLeft()
    - trimRight()
```js
let className = "    K18 Playwright  ";

console.log(className);
console.log(className.trim());
// in ra 
// K18 Playwright
```
- **toLowerCase()**: chuyển chuỗi thành chữ in thường
- **toUpperCase()**: chuyển chuỗi thành chữ in hoa
```js
let className = "K18 Playwright";
// in thường "k18 playwright"
console.log(className.toLowerCase());
// in hoa "K18 PLAYWRIGHT"
console.log(className.toUpperCase());
```
- **includes(<substr>)**: kiểm tra trong chuỗi có chuỗi con nào hay không, trả về boolean
```js
let className = "K18 Playwright";

console.log(className.includes("k18")); // trả về false vì chuỗi k có k18 in thường
console.log(className.includes("K18")); // trả về true
```
- **replace(<chuỗi cần thay>, <chuỗi mới>)**: thay thế 1 chuỗi = 1 chuỗi khác
```js
let className = "K18 Playwright";

console.log(className.replace("Playwright", "Selenium"));
// in ra "K18 Selenium"
```
- **split(<tách_bởi_gì>)**: chia chuỗi thành mảng
```js
let emails = "duyanh@gmail.com, hoang@gmail.com, thao@gmail.com";

const arrEmails = emails.split(","); // cắt từng phần tử, lấy ký tự "," trong chuỗi làm ranh giới phân chia các phần tử, có thể lấy ký tự @, m, ... bất kỳ trong chuỗi làm ranh giới để chia mảng
console.log(arrEmails); // in ra ['duyanh@gmail.com', 'hoang@gmail.com', 'thao@gmail.com']
```
- **substring(<điểm_bắt_đầu>, <điểm_kết_thúc>)**: chia chuỗi cha thành các chuỗi con
```js
let className = "K18 Playwright";

console.log(className.substring(0, 3)); // in ra K18
// 0 là vị trí start, 3 là vị trí end (vị trí start & end tương ứng index trong chuỗi)
console.log(className.substring(4)); // in ra Playwright => xem như start = 4 và k có end
```
- **indexOf(<chuỗi kí tự>)**: xác định vị trí của phần tử cần tìm trong chuỗi
```js
let className = "K18 Playwright";
console.log(className.indexOf("Play")); // in ra 4
```
### 5.2. Array Utils
- **map**: tạo mảng mới = mảng gốc đã được apply 1 hàm lên từng phần tử của mảng gốc
- **filter** tạo mảng mới = các phần tử thỏa điều kiện trong mảng gốc
- **find**: tìm & trả về phần tử đầu tiên trong mảng thỏa điều kiện. Không tìm thấy trả về `undefined`
- **reduce**: gộp tất cả phần tử của mảng thành một giá trị duy nhất. Giá trị này có thể là: số, chuỗi, object, hoặc thậm chí là một mảng mới
```js
// ○ Các hằng số lưu coins theo level:
// ■ Level 1: 25;
// ■ Level 2: 30;
// ■ Level 3: 45;
// ○ Tính giá trị trung bình coin của 3 level và in ra console.

const coins = [
    { level: 1, coin: 25 },
    { level: 2, coin: 30 },
    { level: 3, coin: 45 }
];
// Tính giá trị trung bình coin của 3 level
const average = coins.reduce((sum, { coin }) => sum + coin, 0) / coins.length;
// in ra console và xử lý làm tròn
console.log(`average: ${average.toFixed(2)}`);
```
- **some**: Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện hay không và trả về true/false
- **every**: Kiểm tra xem tất cả phần tử trong mảng có thỏa mãn điều kiện hay không. Trả về true/false.
- **sort**: Sắp xếp các phần tử trong mảng theo thứ tự (mặc định là alphabet/tăng dần). Thay đổi mảng gốc.
- **push**: Thêm một hoặc nhiều phần tử vào cuối mảng
- **pop**: Xóa và trả về phần tử cuối cùng của mảng
- **shift**: Xóa và trả về phần tử đầu tiên của mảng
- **unshift**: Thêm một hoặc nhiều phần tử vào đầu mảng






