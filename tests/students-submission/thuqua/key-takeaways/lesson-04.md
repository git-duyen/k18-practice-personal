# Javascript
## 1. Phạm vi của biến
### 1.1 Block scope (khối)
- Biến được **khai báo** trong **cặp ngoặc nhọn** 

    - **var**: không bị giới hạn bởi cặp ngoặc nhọn
    - **let/const:** bị giới hạn bởi cặp ngoặc nhọn. Ra ngoài bị **undefined**


###### ví dụ:
```javascript
if (true) {

var varVariable = "var không có block scope";
let letVariable = "let có block scope" ; 
const constVariable = "const cũng có block scope";
}

console.log(varVariable); // OK - var không bị giới hạn bởi block 
console.log(letVariable); // Error: letVariable is not defined 
console.log(constVariable); // Error: constVariable is not defined
```

### 1.2 Function scope (hàm)
- Biến được **khai báo** trong một **hàm**

    - Cả **let/var/const ra ngoài hàm** đều bị **undefined**

##### Ví dụ:

```javascript
function myFunction() {

var functionScoped = "Chỉ có thể truy cập trong hàm này"; 
let alsoFunctionScoped = "Tương tự";

console.log (functionScoped); // 0K

}

console.log(functionScoped); // Error: functionScoped is not defined
```

### 1.3 Toàn cục (global)
- Biến được khai báo trong ở một **dòng code tự do, không nằm** trong **khối** hay **hàm**

##### Ví dụ:
```javascript
var globalVar = "Tôi là biến toàn cục"; 
let globalLet = "Tôi cũng là biến toàn cục";

function testFunction() {

console.log(globalVar); // Truy cập được 
console.log(globalLet); // Truy cập được 
｝
```

## 2. Break and continue

##### break dùng để thoát khỏi vòng lặp ngay lập tức

```javascript
for (let i = 0; i < 10; i++) {

if (i === 5) {

break; // Thoát vòng lặp khi i = 5

}
console. log(i);

}
```

##### continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo

```javascript
for (let i = 0; i < 10; i++) {

if (i % 2 === 0) {

    continue; // Bỏ qua số chẵn
    
    }
console.log(i);

｝
```

## 2. Câu điều kiện nâng cao

### 2.1 Câu điều kiện if... else
-  Thực thi code khác nhau cho trường hợp true và false

```javascript
let score = 75;

if (score >= 60) {

console.log( "Bạn đã qua môn"); 
} else {

console.log("Bạn cần học lại");
}
```

### 2.2 Câu điều kiện if...else...if
- Kiểm tra nhiều điều kiện theo thứ tự

```javascript
let score = 85;
if (score >= 90) {
    console.log("Xuất sắc"); 
} else if (score >= 80) { 
    console.log( "Giỏi"); 
} else if (score >= 70) {
    console.log ("Khá");
} else if (score >= 60) {   
    console.log("Trung binh"); 
} else {
    console.log("Yếu");
}
```

### 2.3 Ternary Operator (toán tử điều kiện)
- Cách viết ngắn gọn cho if...else

```javascript
const age = 20;
let status = (age >= 18) ? "Người lớn" : "Trẻ em";
console.log(status); // "Người lớn"

// Có thể lồng nhau (nên cẩn thận với độ phức tạp) 
let score = 75;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
```

### 2.4 for...in Loop
- Dùng để duyệt qua các **thuộc tính** (properties) của một object

```javascript
const person = {
    name: "John",
    age: 30,
    city: "Hanoi",
    oldAddress: { 
        city: "Hai Duong",
        age: 100 
    }
};
for (const key in person) {
    console.log(key);
}
```

### 2.5 forEach Method
- Method của Array để thực thì một function cho mỗi phần tử. **Không thể** dùng **break** hoặc **continue**.

```javascript
const numbers = [11, 2, 3, 4, 51];
numbers.forEach(function (value) {

console.log (value) ;

});
```

### 2.6 Utils function - String
- **Utils function** là các **hàm có sẵn** của JavaScript, giúp việc **code** trở nên nhanh hơn, gọn hơn.

- Ta có 2 loại utils function thường sử dụng là:

    - **Array utils**: các hàm xử lý mảng 
    - **String utils**: các hàm xử lý chuỗi

#### 2.6.1 String utils
#####Tổng quan các loại thao tác:
###### Bỏ khoảng trắng
• Dùng hàm **trim**

```bash
trim( ): bỏ khoảng trắng 2 đầu
trimStart(): bỏ khoảng trắng bên trái
trimEnd( ): bỏ khoảng trắng bên phải
```

```javascript
let text = " Hello World ";

//1 trim() - bỏ khoảng trắng 2 đầu 
    console.log(text.trim());
// "Hello World"

----------------------

// trimStart() - bỏ khoảng trắng bên trái 
console.log(text.trimStart());

// "Hello World "

---------------------

// trimEnd() - bỏ khoảng trắng bên phải 
console.log(text.trimEnd());
// " Hello World"
```

###### Chuyển đổi chữ hoa → chữ thường và ngược lại
- Chữ thường → chữ hoa: **toUpperCase**

- Chữ hoa → chữ thường: **toLowerCase**

```javascript
let str = "JavaScript";

str.toUpperCase(); // "JAVASCRIPT"
str.toLowerCase(); // "javascript"
console.log (str.toUpperCase());
console.log (str.toLowerCase());
```

###### Kiểm tra chuỗi có bao gồm chuỗi con không
- Dùng hàm **includes**

```javascript
let text = "Hello World";
// Kiếm tra chuôi có chứa chuỗi con không 
console.log(text.includes ("World"));
console.log(text.includes ("world"));
```


###### Tách chuỗi thành các phần
- Dùng hàm **split**

```javascript
let text = "Hello World JavaScript"; // Cắt chuỗi theo khoảng trắng 
console.log(text.split(" "));

----------------

let email = "user@gmail.com"; 
email.split("@");
// ["user", "gmail.com"]

```

###### Thay thế ký tự trong chuỗi
- Dùng hàm **replace**

```javascript
let text = "Hello World";

// Thay thế chuỗi con
console.log (text.replace("World", "JavaScript"));
```

#### 2.6.2 Array utils
##### Tổng quan các loại thao tác với mảng:

###### Thêm phần tử vào mảng (push, unshift, splice)
- **Thêm vào cuối:**  `push (<phần tử>)`

```javascript
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);
// [1, 2, 3, 4]
```

- **Thêm vào đầu:**  `unshift(<phần tử>)`
```javascript
let arr = [1, 2, 3]; 
arr. unshift(0);
console.log(arr) ;
// [0, 1, 2, 3]
```

- **Thêm vào giữa:** 
`splice(<vị trí>, <số phần tử cần xoá>, <phần tử cần thêm vào>) `
```javascript 
let arr = [1, 2, 3];
// Thêm vào giữa - splice(vị trí, 0, phần tử) 
arr.splice(2, 0, 1.5);
console.log(arr);
// [1, 2, 1.5, 3]
```

###### Xóa phần tử khỏi mảng (pop, shift, splice)
- **Xóa ở cuối:** `pop ()`
```javascript
let arr = [1, 2, 3, 4, 5]; // Xóa phần tử cuối - pop() 
arr.pop();
console.log(arr);
// [1, 2, 3, 4]
```

- **Xóa ở đầu:** `shift()`
```javascript
let arr = [1, 2, 3, 4, 5]; // Xóa phần tử đầu - shift() 
arr.shift();
console.log(arr);
// [2, 3, 4, 5]
```

- **Xóa ở vị trí bất kỳ:**
`splice(<vi trí>, <số phân tử cần xóa>)`
```javascript
// Xóa phần tử ở vị trí bất kỳ - splice(vị trí, số lượng)
let arr = [1, 2, 3, 4, 5];
arr.splice(1,1);
// Xóa 1 phần tử tại vị trí index 1
console.log(arr);
// [1, 3, 4, 5]
```

###### Tìm kiếm (find, filter)
- **Trả về phần tử đầu tiên hợp lệ - find()**
```javascript
const numbers = [5, 12, 8, 130, 44];
// find() - Trả về phần tử đầu tiên > 10 
let first = numbers.find (num => num > 10); 
console.log(first);
```
- **Trả về tất cả các phần tử hợp lệ - filter()**
```bash
const numbers = [5, 12, 8, 130, 44];
// filter() - Trả về phần tử đầu tiên > 10 
let all = numbers.filter(num => num > 10); 
console.log(all);
// [12, 130, 44]
```
###### Biến đổi mảng (map)
- **map**: Tạo mảng mới bằng cách áp dụng một hàm lêh từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài

```javascript
const numbers = [1, 2, 3, 4, 5];

// Nhân mỗi phần tử với 2
let doubled = numbers.map(num => num * 2); 
console.log (doubled);
// [2, 4, 6, 8, 10]
```
###### Sắp xếp mảng (sort)

- `sort((a, b) => a - b)`

    - So sánh từng cặp phần tử a và b 
    - Trả về số âm: a đứng trước b 
    - Trả về số dương: b đứng trước a 
    - Trả về 0: giữ nguyên thứ tự

```javascript
const numbers = [40, 100, 1, 5, 25, 10]; 
// Sắp xếp tăng dần
numbers.sort((a, b) => a - b); 
console.log (numbers);
// [1, 5, 10, 25, 40, 100]

// Sắp xếp giảm dần
numbers.sort ((a, b) => b - a); 
console.log (numbers);
// [100, 40, 25, 10, 5, 1]
```
