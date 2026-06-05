## 1. Phạm vi của biến 
Phạm vi (scope) xác định nơi mà biến có thể truy cập. Có 3 loại phạm vi

## 1.1. Block scope
Biến được khai báo trong cặp ngoặc nhọn 

- Var: Không bị giới hạn bởi cặp ngoặc nhọn
- let/const: bị giới hạn bởi cặp ngoặc nhọn,ra ngoài bị undefind

       if (true) {
        var varVariable = " Var ko có block scope";
        let letVariable = "let có block scope" 
        const constVariable = "const cũng có block scope"
       }
       console.log(varVariable) //OK
       console.log(let Variable) //error
       console.log(const Variable) //error

## 1.2 Function scope
- Biến được khai báo trong 1 hàm 
- Cả var/let/const ra ngoài hàm đều bị undefined
         function myFunction() {
         var functionScoped = "Chỉ có thể truy cập trong hàm này";
         let alsoFunctionScoped = "Tương tự";

         console.log(functionScoped); // OK
         }

        console.log(functionScoped); // Error: functionScoped is not defined

## 1.3 Toàn cục (global):
- Biến được khai báo trong 1 dòng code tự do, không nằm trong biến hay hàm 

         var globalVar = "Tôi là biến toàn cục";
        let globalLet = "Tôi cũng là biến toàn cục";

          function testFunction() {
         console.log(globalVar); // Truy cập được
        console.log(globalLet); // Truy cập được
         }

# 2. Break and Continue
## 2.1 Break 
 - break dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.

          const numbers = [1, 3, 8, 7, 9, 11];
        let firstEven = null;

        for (let num of numbers) {
         if (num % 2 === 0) {
        firstEven = num;
        break; // Dừng ngay khi tìm thấy
        }
        }

## 2.2. Continue 
- continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.
        
        // Bỏ qua số chẵn
        for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
        continue; // Bỏ qua số chẵn
        }
        console.log(i);
        }

        // Output: 1, 3, 5, 7, 9
 

 # 3. Câu điều kiện nâng cao 
- Câu điều kiện if…else: Thực thi code khác nhau cho trường hợp true và false:

      let score = 75;

      if (score >= 60) {
      console.log("Bạn đã qua môn");
       } else {
       console.log("Bạn cần học lại");
     }

- Câu điều kiện if…else…if: Kiểm tra nhiều điều kiện theo thứ tự:

       let score = 85;

       if (score >= 90) {
        console.log("Xuất sắc");
       } else if (score >= 80) {
        console.log("Giỏi");
       } else if (score >= 70) {
       console.log("Khá");
       } else if (score >= 60) {
       console.log("Trung bình");
       } else {
       console.log("Yếu");
       }'

 - Ternary operator (toán tử điều kiện): Cách viết ngắn gọn cho if...else đơn giản
          
         let age = 20;
        let status = (age >= 18) ? "Người lớn" : "Trẻ em";
        console.log(status); // "Người lớn"

# 4. Vòng lặp nâng cao 
- for...in Loop
Dùng để duyệt qua các thuộc tính (properties) của một object.
      
      // Với Object
      const person = {
       name: "John",
       age: 30,
       city: "Hanoi"
       };

      for (let key in person) {
      console.log(key + ": " + person[key]);
      }

      // Output:
      // name: John
      // age: 30
      // city: Hanoi


      // Với Array (không khuyến khích)
      const colors = ["red", "green", "blue"];

      for (let index in colors) {
       console.log(index + ": " + colors[index]);
      }

      // Output:
      // 0: red
      // 1: green
      // 2: blue



- forEach Method
Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng break hoặc continue.


      const numbers = [1, 2, 3, 4, 5];

       numbers.forEach(function(value) {
       console.log(value);
       });

# 5. Untils function 
- Utils = tiện ích
- Utils function là các hàm có sẵn của JavaScript, giúp việc code trở nên nhanh hơn, gọn hơn.
- Trong bài này, ta học 2 loại utils function thường sử dụng là:
- String utils: các hàm xử lý chuỗi
- Array utils: các hàm xử lý mảng

## 5.1  String utils
Thêm phần tử vào mảng
- Thêm vào cuối: push(<phần tử>)
- Thêm vào đầu: unshift(<phần tử>)
- Thêm vào giữa: splice(<vị trí>, <số phần tử cần xoá>, <phần tử cần thêm vào>)
 
        let arr = [1, 2, 3];
       // Thêm vào cuối - push()
       arr.push(4);
       console.log(arr); 
       // Kết quả: [1, 2, 3, 4]

       // Thêm vào đầu - unshift()
       arr.unshift(0);
       console.log(arr); 
       // Kết quả: [0, 1, 2, 3, 4]

       // Thêm vào giữa - splice(vị trí, 0, phần tử)
       // Ở đây: bắt đầu từ vị trí index 2, xóa 0 phần tử, và chèn thêm 1.5
      arr.splice(2, 0, 1.5);
       console.log(arr); 
       // Kết quả: [0, 1, 1.5, 2, 3, 4]

Xóa phần tử khỏi mảng
- Xóa ở cuối: pop()
- Xóa ở đầu: shift()
- Xóa ở vị trí bất kỳ: splice(<vị trí>, <số phần tử cần xóa>)

       let arr = [1, 2, 3, 4, 5];

       // Xóa phần tử cuối - pop()
       arr.pop();
       console.log(arr); 
       // Kết quả: [1, 2, 3, 4]

       // Xóa phần tử đầu - shift()
       arr.shift();
       console.log(arr); 
       // Kết quả: [2, 3, 4]

       // Xóa phần tử ở vị trí bất kỳ - splice(vị trí, số lượng)
       arr.splice(1, 1); 
        // Xóa 1 phần tử tại vị trí index 1 (số 3 đang ở index 1 sau các lệnh trên)
       console.log(arr); 
       // Kết quả: [2, 4]

## 5.2  Array utils
Tìm kiếm phần tử
- Trả về phần tử đầu tiên hợp lệ: find()
- Trả về tất cả các phần tử hợp lệ: filter()

```
const numbers = [5, 12, 8, 130, 44];

// find() - Trả về phần tử đầu tiên > 10
let first = numbers.find(num => num > 10);
console.log(first); 
// Kết quả: 12

// filter() - Trả về tất cả phần tử > 10
let all = numbers.filter(num => num > 10);
console.log(all); 
// Kết quả: [12, 130, 44]
```

Biến đổi mảng
- map(): Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài với mảng ban đầu.

```
let numbers = [1, 2, 3, 4, 5];

// Nhân mỗi phần tử với 2
let doubled = numbers.map(num => num * 2);

console.log(doubled); 
// Kết quả: [2, 4, 6, 8, 10]

```

Sắp xếp mảng
- Hàm sort() được sử dụng để sắp xếp các phần tử. Khi sử dụng hàm so sánh (a, b) => a - b, cơ chế hoạt động như sau:
- So sánh từng cặp phần tử a và b.
-Trả về số âm: a đứng trước b.
-Trả về số dương: b đứng trước a.
- Trả về 0: giữ nguyên thứ tự.

``` 
let numbers = [40, 100, 1, 5, 25, 10];

// Sắp xếp tăng dần: (a, b) => a - b
numbers.sort((a, b) => a - b);
console.log(numbers); 
// Kết quả: [1, 5, 10, 25, 40, 100]

// Sắp xếp giảm dần: (a, b) => b - a
numbers.sort((a, b) => b - a);
console.log(numbers); 
// Kết quả: [100, 40, 25, 10, 5, 1]
```
