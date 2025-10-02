# Tổng hợp kiến thức đã học từ Lesson 4

## JavaScript

### 1. Phạm vi biến (Scope)

Trong JavaScript có **3 phạm vi chính**: Global, Function và Block.

---

**a. Global Scope (toàn cục)**  
- Biến khai báo bên ngoài hàm hoặc block.  
- Dùng được ở mọi nơi trong code.  

Ví dụ:
```js
    let currentUser = "Hiền";

    function showWelcome() {
      console.log("Xin chào " + currentUser);
    }

    showWelcome();          // Xin chào Hiền
    console.log(currentUser); // Hiền
```
---

**b. Function Scope (phạm vi hàm)**  
- Biến chỉ tồn tại trong hàm khai báo
- Bên ngoài hàm không thể gọi để sử dụng.

Ví dụ:
```js
    function calculateDiscount(price) {
      let discount = 0.1; // chỉ tồn tại trong hàm
      return price - price * discount;
    }

    console.log(calculateDiscount(100)); // 90
    // console.log(discount); // Lỗi
```
---

**c. Block Scope (phạm vi khối)**  
- Biến hoặc const trong {} chỉ tồn tại trong block đó.

- Thường gặp trong if, for, while.

- Khác với `var`, khai báo `var` trong block vẫn có thể gọi ở ngoài.

Ví dụ:
```js
    let isLoggedIn = true;

    if (isLoggedIn) {
      let username = "Hien";
      console.log("Xin chào " + username); // Xin chào Hien
    }

    // console.log(username); // Lỗi: username không tồn tại ngoài block

```
---
### 2. Break và continue
---
**a. Break**  
- break dùng để thoát khỏi vòng lặp ngay lập tức. 
- Nếu muốn in dữ liệu trước khi dừng, đặt `console.log` trước break. 

Ví dụ:

```js
let numbers = [4, 7, 9, 12, 15];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log("Số chia hết cho 3 là:" + numbers[i]);
    break; // thoát vòng lặp ngay lập tức
  }
}
```
---
**b. Continue**  
- continue dùng để bỏ qua bước hiện tại của vòng lặp, tiếp tục vòng kế tiếp.

Ví dụ: in ra các số lẻ trong mảng
```js
let numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    continue; // bỏ qua số chẵn, tiếp tục kiểm tra số tiếp theo
  }
  console.log("Số lẻ: " + numbers[i]);
}
```
- Chỉ in ra các số lẻ: 1, 3, 5.
---
### 3. if...else
- if...else dùng để thực thi code khác nhau cho trường hợp true hoặc false, thay vì phải dùng 2 vùng if riêng biệt.

Ví dụ: 
```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " là số chẵn");
  } else {
    console.log(i + " là số lẻ");
  }
} 
```
- Khi i = 0,2,4,... sẽ thực thi nhánh if (số chẵn)

- Khi i = 1,3,5,... sẽ thực thi nhánh else (số lẻ)
---
### 4. if...elseif
- Dùng if...else if khi cần kiểm tra nhiều điều kiện theo thứ tự.

- Khi điều kiện đầu tiên đúng, các điều kiện sau sẽ không được kiểm tra.

Ví dụ: in ra tên ngày trong tuần dựa trên giá trị `today`
```js
const today = 1;

if (today === 2) {
    console.log("Thứ 2");
}
else if (today === 3) {
    console.log("Thứ 3");
}
else if (today === 4) {
    console.log("Thứ 4");
}
else if (today === 5) {
    console.log("Thứ 5");
}
else if (today === 6) {
    console.log("Thứ 6");
}
else if (today === 7) {
    console.log("Thứ 7");
}
else {
    console.log("Chủ nhật");
}
```
- Nếu today = 1, chương trình sẽ in "Chủ nhật".

- Nếu today = 3, chương trình sẽ in "Thứ 3", và các nhánh sau sẽ không được thực thi.
---
### 5. Ternary Operator 
- Ternary Operator dùng để viết gọn câu lệnh if...else đơn giản.

- Cú pháp: `condition ? value_if_true : value_if_false`

Ví dụ: 
```js
let age = 65;
let myStatus = (age >= 65) ? "Nghỉ hưu" : "Lao động";
console.log(myStatus); // Nghỉ hưu
```
- Tương đương với câu lệnh if...else:
```js
let age = 65;
if (age >= 65) {
    console.log("Nghỉ hưu");
}
else if (age < 65) {
    console.log("Lao động");
}
else {
    console.log("Tuổi không hợp lệ");
}
```
`Ternary thích hợp cho if...else đơn giản, nhưng với nhiều điều kiện lồng nhau nên dùng if...else if để dễ đọc.`

---
### 6. for…in và for…of
---
#### 6.1. for…in — Duyệt key/index

- for…in dùng để duyệt các khóa (key) của object hoặc chỉ số index của mảng.

- Khi dùng object: lấy ra các tên property.

- Khi dùng mảng: lấy ra index của các phần tử.

`Note: với mảng, for…in trả về index, không phải giá trị`

Ví dụ với object: 
```js
const person = {
    name: "Hien",
    age: 25,
    city: "Ho Chi Minh"
}

for (let property in person) {
    console.log(`Property: ${property}`);
    console.log(`Property value: ${person[property]}`);
}
```
Output:
- Property: name
- Property value: Hien
- Property: age
- Property value: 25
- Property: city
- Property value: Ho Chi Minh

Ví dụ với mảng (lấy index):
```js
const arr2 = ["Hien", "Huy", "Phuong"];
for (let i in arr2) {
    console.log(i);
}
```
Output:
- 0
- 1
- 2
---
#### 6.2. for…of — Duyệt giá trị
- for…of dùng để lấy giá trị trực tiếp của phần tử trong mảng hoặc iterable.

- Không dùng được trực tiếp với object (trừ khi dùng Object.values() hoặc Object.entries()).

Ví dụ: 
```js
const arr = [100, 50, 98, 50];

for (let item of arr) {
    if (item > 50)
        console.log(item);
}
```
Output:
- 100
- 98

`Note: for…of trực tiếp lấy giá trị (item), không phải index. Thực tế áp dụng dùng để lọc điều kiện, ví dụ item > 50.`

---
#### 6.3. Kết hợp key và giá trị của object

- Dùng for…in kết hợp với truy xuất giá trị để lấy cả key và value.

Ví dụ:
```js
const person = {
    name: "Hien",
    age: 25,
    city: "Ho Chi Minh"
}

for (let key in person) {
    console.log(`Key: ${key}, Value: ${person[key]}`);
}
```
Output:
- Key: name, Value: Hien
- Key: age, Value: 25
- Key: city, Value: Ho Chi Minh


> Tip:

- for…in: lấy key/index

- for…of: lấy value

- Muốn lấy cả key và value của object, dùng for…in + object[key] 

---
### 7. Util function
---
#### 7.1. String utils
- trim(): loại bỏ khoảng trắng đầu và cuối chuỗi

Ví dụ:
```js
let str = " Hello World ";
console.log(str.trim()); // "Hello World"
```
- toLowerCase()/toUpperCase(): chuyển đổi chuỗi thành chữ thường/chữ hoa

Ví dụ:
```js
let className = "   K18 PlayWright   ";
console.log(className.trim().toLowerCase()); // "k18 playwright"
console.log(className.trim().toUpperCase()); // "K18 PLAYWRIGHT"
```
- includes(): kiểm tra chuỗi có một chuỗi con hay không, trả về true/false

Ví dụ:
```js
let className = "   K18 PlayWright   ";
console.log(className.toLowerCase().includes("k18")); // true
```
- replace(): thay thế chuỗi con, nếu không tìm thấy chuỗi cần replace thì không replace

Ví dụ:
```js
let className = "   K18 PlayWright   ";
console.log(className.replace("K58", "K19")); // "   K18 PlayWright   "
```
- split(): chia chuỗi thành mảng dựa trên ký tự phân tách

Ví dụ:
```js
let emails = "hiendo@gmail.com, dohien@gmail.com, datdo@gmail.com";
const arrEmails = emails.split("@");
console.log(arrEmails); // ["hiendo", "gmail.com, dohien", "gmail.com, datdo", "gmail.com"]
```
- substring(): lấy phần chuỗi từ vị trí start -> end ( không bao gồm end)

Ví dụ:
```js
console.log(className.substring(0,3)); // "   "
console.log(className.trim().substring(0,3)); // "K18"
console.log(className.substring(5));   // "layWright"
```
- indexOf(): tìm index của chuỗi con, nếu không có trả về -1

Ví dụ:
```js
console.log(className.indexOf("Play"));  // 7
console.log(className.indexOf("rrrr"));  // -1
```









