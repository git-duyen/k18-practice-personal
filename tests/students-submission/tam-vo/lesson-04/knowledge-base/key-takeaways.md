# JavaScript

## JavaScript - Phạm vi của biến

### 1. Block scope (khối)

> Khai báo trong **cặp ngoặc nhọn**

+ **var** không bị giới hạn

+ **let/const**: bị giới hạn. Nếu ra ngoài cặp ngoặc sẽ ***undefined***

```js
if (true) {
    var varVariable = "var không có block scope";
    var letVariable = "let có block scope";
    const constVariable = 'const cũng có block scope";
}
console.log(varVariable); // OK
console.log(letVariable); //ERROR
console.log(constVariable); //ERROR

```

### 2. Function scope (hàm)

> Biến được **khai báo** trong một hàm

+ Cả let/var/const: đều bị giới hạn khi ra ngoài hàm (undefined)

```js
function myFunction() {
    var functionScoped = "Chỉ có thể truy cập trong hàm này";
    let alsoFunctionScope = "Tương tự";

    console.log(functionScoped); // Output: "Chỉ có thể truy cập trong hàm này"
}
console.log(functionScoped); // Uncaught ReferenceError: functionScoped is not defined
console.log(alsoFunctionScope); // Uncaught ReferenceError: alsoFunctionScope is not defined
console.log(myFunction)
```

### 3. Toàn cục (global)

> Biến được khai báo ở một **dòng code tự do**, không nằm trong khối hay ngoài hàm

```js
var globalVar = "Tôi là biến toàn cục";
let globalLet = "Tôi cũng là biến toàn cục nhưng có block scope";

function testFunction() {
    console.log(globalVar); // truy cập được
    console.log(globalLet); // truy cập được
}
```

## JavaScript - break and continue

### 1. break

> Dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức

```js
// Thoát khi tìm thấy giá trị
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // thoát khỏi vòng lặp khi i = 5
    }
console.log(i);
}
//Output: 0,1,2,3,4
```

```js
 const number = [1,3,8,7,9,11];
 let firstEven = null;

 for (let i = 0; i < number.length; i++) {
     if (num % 2 === 0) {
         firstEven = num;
         break;
     }
     console.log(`So ${num} là số lẻ.`);
 }
 console.log(`Số chẵn đầu tiên trong mảng là: ${firstEven}`); // Output: 8
```

### 2. continue

> Dùng để **bỏ qua phần còn lại** của vòng lặp hiện tại và **chuyển sang lần lặp tiếp theo**.

```js
// Bỏ qua số chắn
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Bỏ qua số chẵn
    }
console.log(i);
}
//Output: 1,3,5,7,9
```

```js
// Lọc dữ liệu
const scores = [85, 92, 78, 95, 60, 88]
console.log("Điểm >= 80: ")

for (let i = 0; i < scores.length; i ++) {
    if (scores < 80)
    continue;
}
console.log(score);
//Output: 85, 92, 95, 88
```

## JavaScript - Câu điều kiện nâng cao

### 1. if...else

> Thực thi code khác nhau cho các case true and false

```js
 let score = 75;
 if (score >= 60) {
    console.log("Bạn đã qua môn");
} else  {
    console.log("Bạn cần học lại");
}

```

### 2. if...else...if

> Kiểm tra nhiều điều kiện theo thứ tự

```js
let score = 85;
if (score >= 90) {
    console.log("Xuất sắc");
} else if (scores >= 80) {
    console.log("Giỏi");
} else if (scores >= 70) {
    console.log("Khá");
} else if (scores >= 60) {
    console.log("Trung bình");
} else {
    console.log("Yếu");
}
```

### 3. Ternary operator (toán tử điều kiện)

> Cách viết ngắn gọn cho if...else đơn giản

```js
let age = 20;
let status = (age > 20) ? "Người lớn" : "Trẻ em";
console.log(status);
```

## JavaScript - Vòng lặp nâng cao

### 1. for...in Loop

> Dùng để duyệt qua các thuộc tính (properties) của một object

```js
// Với Object
const person = {
    name : "John",
    age: 30,
    city : "Hà Nội"
};
for (let key in person) {
    console.log( key + ": " + person[key]);
}
//Ouput :
// name: John
// age: 30
//city: Hà Nội
```

```js
// Với Array (không khuyến khích)
const colors = ["red" , "green" , "blue"];
for (let index in colors) {
    console.log(index + ": " + color[index]);
}
```

### 2. forEach Method

> Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng break or continue

```js
const numbers = [1, 2, 3, 4, 5];

number.forEach(function(value) {
    console.log(value);
});
```

## JavaScript - Utils function

> Utils function là các hàm có sẵn của JavaScript, giúp việc code trở nên nhanh gọn hơn.

### 1. String utils: Hàm xử lý chuỗi

| Nhóm | Hàm | Mô tả |
| ------- | ------ | ------- |
| Bỏ khoảng trắng | `trim()` | Bỏ khoảng trắng ở 2 đầu chuỗi |
| Bỏ khoảng trắng | `trimStart()` | Bỏ khoảng trắng bên trái |
| Bỏ khoảng trắng | `trimEnd()` | Bỏ khoảng trắng bên phải |
| Chuyển đổi chữ hoa/thường | `toUpperCase()` | Chữ thường → CHỮ HOA |
| Chuyển đổi chữ hoa/thường | `toLowerCase()` | CHỮ HOA → chữ thường |
| Tìm chuỗi con | `includes()` | Kiểm tra chuỗi có chứa chuỗi con hay không |
| Tách chuỗi | `split()` | Tách chuỗi thành mảng |
| Thay thế ký tự | `replace()` | Thay thế một phần của chuỗi |

***Example***

```js
let text = " Hello World " 
```

| Hàm | Ví dụ | Kết quả |
| ------ | -------- | ---------- |
| `trim()` | `console.log(text.trim())` | `"Hello World"` |
| `trimStart()` | `console.log(text.trimStart())` | `"Hello World "` |
| `trimEnd()` | `console.log(text.trimEnd())` | `" Hello World"` |
| `toUpperCase()` | `console.log(text.toUpperCase())` | `" HELLO WORD "` |
| `includes()` | `console.log(text.includes("world")` | `false` |
| `includes()` | `console.log(text.includes("World")` | `true` |
| `split()` | `console.log(text.split(" ")` | `["Hello","World"]` |
| `replace()` | `console.log(text.replace("W","w")` | `"Hello world"` |

### 2. Array utils (Hàm xử lý mảng)

1. Thêm phần tử vào mảng:

    | Hàm | Cú pháp | Mô tả |
    | ------ | ---------- | ---------- |
    | `push()` | `push(element)` | Thêm vào cuối mảng |
    | `unshift()` | `unshift(element)` | Thêm vào đầu mảng |
    | `splice()` | `splice(index, 0, element)` | Thêm vào vị trí bất kỳ |

    **Example**

    ```js
    let arr = [1, 2, 3];
    
    //Thêm vào cuối - push()
    arr.push(4);
    console.log(arr); //[1, 2, 3, 4]

    //Thêm vào đầu - unshift()
    arr.unshift(0);
    console.log(arr); //[0, 1, 2, 3, 4]

    //Thêm vào giữa - splice(index, 0, element), số 0 luôn cố định
    arr.splice(2, 0, 1.5);
    console.log(arr); //[0, 1, 1.5, 2, 3, 4]
    ```

2. Xoá phần tử khỏi mảng:

    | Hàm | Cú pháp | Mô tả |
    | ------ | ---------- | ---------- |
    | `pop()` | `pop()` | Xóa phần tử cuối |
    | `shift()` | `shift()` | Xóa phần tử đầu |
    | `splice()` | `splice(index, count)` | Xóa tại vị trí bất kỳ |

    **Example**

    ```js
    let arr = [1, 2, 3, 4, 5];
    
    // Xoá phần tử cuối - popush()
    arr.pop();
    console.log(arr); //[1, 2, 3, 4]

    //Xoá phần tử đầu - shift()
    arr.shift(0);
    console.log(arr); //[2, 3, 4]

    //Xoá phần tử ở vị trí bất kì - splice(index, count)
    arr.splice(1, 1);
    console.log(arr); //[2, 4]
    ```

3. Tìm kiếm phần tử:

    | Hàm | Trả về |
    | ------ | ---------- |
    | `find()` | Phần tử đầu tiên thỏa điều kiện |
    | `filter()` | Tất cả phần tử thỏa điều kiện |

     **Example**

    ```js
    const numbers = [5, 12, 8, 130, 44];
    
    // trả về phần tử đầu tiên > 10
    let first = numbers.find(num => num > 10);
    console.log(first); // 12

    // trả về tất cả các phần tử > 10
    let all = numbers.find(num => num > 10);
    console.log(all); // [12, 130, 44]

    ```

4. Biến đổi mảng:
    > **map** : ***{Tạo mảng mới}*** bằng cách áp dụng 1 hàm lên **từng phần tử** của mảng gốc. Trả về ***{mảng mới có cùng độ dài}***

    **Example**

    ```js
    let numbers = [1, 2, 3, 4, 5];
    // Nhân mỗi phần tử với 2
    let doubled = numbers.map(num => num *2);
    console.log(doubled);
    // Output: [2, 4, 6, 8, 10]
    ```

5. Sắp xếp mảng:

    ```js
    array.sort((a, b) => a - b);
    ```

    **Cách hoạt động:**
         - `a` và `b` là 2 phần tử được đem ra so sánh.
         - Hàm callback phải trả về một số:

    | Giá trị trả về | Kết quả |
    | --------------- | ---------- |
    | `< 0` | `a` đứng trước `b` |
    | `> 0` | `b` đứng trước `a` |  
    | `= 0` | Giữ nguyên thứ tự |  

    **Example**

    ```js
    let numbers = [40, 100, 1, 5, 25, 10];

    // Sắp xếp tăng dần
    numbers.sort((a, b) => a - b);
    console.log(numbers);
    // [1, 5, 10, 25, 40, 100]

    // Sắp xếp giảm dần
    numbers.sort((a, b) => b - a);
    console.log(numbers);

    // [100, 40, 25, 10, 5, 1]
    ```
