# Tổng hợp kiến thức dã học

## Buổi 4

### 1. Javascript - Phạm vi của biến

Phạm vi (scope) xác định nơi mà biến có thể truy cập, JS có 3 loại phạm vi:

1. Block scope (khối): Biến được **_khai báo_** trong **_cặp ngoặc nhọn_**

- var: không bị giới hạn bởi cặp ngoặc nhọn.
- let/const: bị giới hạn bởi cặp ngoặc nhọn. Ra ngoài bị **_undefinded_**

2. Function scope (hàm) Biến được **_khai báo_** trong một **_hàm_**

- Cả let/var/const **_ra ngoài hàm_** đều bị **_undefinded_**

3. Global (toàn cục): Biến được khai báo ở **_dòng code tự do_**, **_không nằm_** trong **_khối_** hay **_hàm_**

### 2. Javascript - break and continue

break dùng để **_thoát hoàn toàn khỏi vòng lặp_** ngay lập tức.

```markdown
//thoát khỏi vòng lặp khi i = 5
for(let i = 0; i<=10 ; i++){
if(i===5){
break; // thoát khỏi vòng lặp
}
console.log()
}
```

continue dùng để **_bỏ qua phần còn lại_** của vòng lặp hiện tại để **_chuyển sang lần lặp tiếp theo_**

```markdown
//bỏ qua số chắn
for(let i=0;i < 10; i++){
if(i % 2 === 0){
continue; // bỏ qua số chẵn
}
console.log(i)
}
```

### 3. Javascript - Câu điều kiện nâng cao

1. Câu điều kiện **if...else**: thực thi code khác nhau cho trường hợp true và false

```markdown
let score = 75;
if(score>=60){
console.log("bạn đã qua môn");
}else{
console.log("bạn cần học lại");
}
```

2. Câu điều kiện **if...else...if**: kiểm tra nhiều điều kiện theo thứ tự

```markdown
let score = 75;
if(score >= 90){
console.log("Xuất sắc");
}else if(score >= 80){
console.log("Giỏi");
}else if(score >= 70){
console.log("Khá");
}else if(score >= 60){
console.log("Trung bình");
}else {
console.log("Yếu");
}
```

3. Ternary operator (toán tử điều kiện): Cách viết ngắn gọn cho if...else đơn giản

```markdown
let age = 20;
let status = (age>=18) ? "Người lớn" : "Trẻ em";
console.log(status): // "Người lớn"

//có thể lồng nhau(nên cẩn thận với độ phức tạp)
let score = 75;
let grade = score >= 90 ? "A":
score >= 80 ? "B";
score >= 70 ? "C";
score >= 60 ? "D" : "F";
```

### 4. Javascript - Vòng lặp nâng cao

1. for...in Loop

Dùng để duyệt qua các thuộc tính (propertíes) của một object

```markdown
const person = {
name: "John",
age: 30,
city: "New York",
oldAddress = {city: "WDC, age:20};
};
for(let key in person){
console.log(key + ": " + person[key]);
//output: name age city oldAddress
}
```

2. forEach Loop

Method của Array để thực thi một function cho mỗi phần tử. **Không thể dùng break hoặc continue**

```markdown
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(value){
console.log(value);
if(i%2===0){
break; //lỗi
continue; //lỗi
}
})
```

### 5. Javascript - Utils function - String

Utils = tiện ích
Utils function là các hàm có sẵn của JS, giúp việc code trở nên nhanh hơn, gọn hơn.

2 loại utils thường được sử dụng là:

- String utils: các hàm xử lý chuỗi
- Array utils: các hàm xử lý mảng

1. String utils

Tổng quan các thao tác:

- Bỏ khoảng trắng: Dùng hàm trim
  - trim(): bỏ khoảng trắng 2 đầu
  - trimStart(): bỏ khoảng trắng bên trái
  - trimEnd(): bỏ khoảng trắng bên phải

- Chuyển đổi HOA -> thường
  - toUpperCase(): chữ thường -> chữ HOA
  - toLowerCase(): chữ Hoa -> chữ thường

- Kiểm tra chuỗi có bao gồm chuỗi con không (phân biệt chữ hoa chữ thường)
  - Dùng hàm includes("[tên chuỗi]")

- Cắt chuỗi
  - Dùng hàm split("[tên chuỗi]")

- Thay thế chuỗi con bằng chuỗi con khác
  - Dùng hàm replace("[chuỗi ban đầu]","[chuỗi thay thế]")

2. Array utils

- Thêm phần tử vào mảng:
  - Thêm vào cuối: push(<phần tử>)
  - Thêm vào đầu: unshift(<phần tử>)
  - Thêm vào giữa: splice(<vị trí>,<số phần tử cần xoá>,<phần tử cần thêm vào>)

- Xoá phần tử khỏi mảng:
  - Xoá ở cuối: pop(<phần tử>)
  - Xoá ở đầu: shift(<phần tử>)
  - Xoá ở vị trí bất kỳ: splice(<vị trí>,<số phần tử cần xoá>)

- Tìm kiếm phần tử:
  - Trả về phần tử đầu tiên hợp lệ - find()
  - Trả về tất cả các phần tử hợp lệ - filter()

- Biến đổi mảng:
  - map: _Tạo mảng mới_ bằng cách áp dụng một hàm lên **từng phần tử** của mảng gốc. Trả về _mảng mới có cùng độ dài_

- Sắp xếp mảng: sort(a, b) => a - b
  - So sánh từng cặp phần tử a và b
  - Trả về số âm: a đứng trước b
  - Trả về số dương: b đứng trước a
  - Trả về 0: giữ nguyên thứ tự

- map: _tạo mảng mới_ bằng cách áp dụng một hàm lên **từng phần tử** của mảng gốc. Trả về _mảng mới có cùng độ dài_

  ```markdown
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(num => num \* 2);

  console.log(doubled) // [2, 4, 6, 8, 10]
  console.log(numbers) // [1, 2, 3, 4, 5] - mảng gốc không thay đổi
  ```

  ```markdown
  const students = [`An`, `Bình`, `Cường`];
  const studentList = students.map((name, index) => ({
  id: index + 1,
  name: name,
  code: `SV00${index + 1}`,
  }) );

  console.log(studentList);
  // {
  // {id: 1, name: `An`, code: `SV001`},
  // {id: 2, name: `Bình`, code: `SV002`},
  // {id: 3, name: `Cường`, code: `SV003`},
  // }
  ```

- filter: _tạo mảng mới_ chỉ chứa các phần tử _thoả mãn điều kiện_ trong hàm callback. Trả về _mảng đã được lọc_

  ```markdown
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers) // 2, 4, 6, 8, 10
  console.log(numbers)// 1, 2, ..., 10 - mảng gốc không đổi
  ```

- find: tìm và trả về _phần tử đầu tiên_ trong mảng thoã mản điều kiện. Trả về _undefined_ nếu _không tìm thấy_

  ```markdown
  const numbers = [1, 5, 3, 8, 2, 10, 7];

  const firstEven = numbers.find(num => num % 2 === 0);
  console.log(firstEven) // 8 (không phải 2 hay 10)

  const negative = numbers.find(num => num < 0);
  console.log(negative) // undefinded
  ```

- reduce: duyệt qua mảng và _tích luỹ_ các phần tử thành một giá trị duy nhất (số, chuỗi, object...) dựa trên _hàm callback_

  ```markdown
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((a, c) => {
  console.log(`accumulator: ${a}, current: ${c} `);
  return a + c;
  }, 0);
  // accumulator: 0, current: 1 => return 1
  // accumulator: 1, current: 2 => return 3
  // accumulator: 3, current: 3 => return 6
  // accumulator: 6, current: 4 => return 10
  // accumulator: 10, current: 5 => return 15
  console.log(sum) // 15
  ```

- some: kiểm tra xem có _ít nhất một phần tử_ trong mảng thoả mãn điều kiện hay không. Trả về true/false.

  ```markdown
  const numbers = [1, 3, 5, 7, 9];

  const hasEven = numbers.some(num => num % 2 === 0);
  console.log(hasEven) // true (vì có số 8)
  ```

- every: kiểm tra xem _tất cả các phần tử_ trong mảng có thoả mãn điều kiện hay không. Trả về true/false

  ```markdown
  const numbers = [2, 4, 6, 8, 10];

  const allEven = numbers.every(num => num % 2 === 0);
  console.log(allEven); // true
  ```

- sort: _Sắp xếp_ các phần tử trong mảng theo _thứ tự_(mặc định là alphabet/tăng dần). _Thay đổi mảng gốc_

  ```markdown
  const fruits = [`banana`, `apple`, `orange`, `grape`];
  fruits.sort();
  console.log(fruits) // [`apple`, `banana`, `grape`, `orange`];

  //BUG phổ biến: sort số không đúng theo mặc định
  const numbers = [10, 5, 40, 25, 1000, 1];
  numbers.sort();
  console.log(numbers)// 1, 10, 1000, 20, 40 ,5 - sort mặc định chuyển thành string "10" < "5"

  // CÁCH ĐÚNG: dùng compare function
  const numbers2 = [10, 5, 40, 25, 1000, 1];
  numbers2.sort((a, b) => a - b); // tăng dần
  console.log(numbers2); // 1, 5, 10, 20, 40, 1000 - ĐÚNG
  ```
