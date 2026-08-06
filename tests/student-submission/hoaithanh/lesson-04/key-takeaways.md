# JavaScrip Continue
## I. JavaScript
### 1. Phạm vi của biến
- Scope: Xác định nơi mà biến có thể truy cập
- Có 3 loại phạm vi: 
    + Block scop (Khối): Biến được khai báo trong cặp ngoặc nhọn
        + Var: không bị giới hạn bởi cặp ngoặc nhọn
        + let/const: bị giới hạn bởi cặp ngoặc nhọn, ra ngoài bị undefine
    
        + EX
        ```
        if (true) {
            var varVariable = "var khong co block scope";
            let letVariable = "let co block scope";
            const constVariable = "const cung co block scope";
        }

        console.log(varVariable); // OK - var khong bi gioi han boi block
        console.log(letVariable); // Error: letVariable is not defined
        console.log(constVariable); // Error: constVariable is not defined
        ```

    + Function Scope (Hàm): Biến được khai báo trong một hàm
        + Cả `let/var/const` ra ngoài hàm đều bị undefine
        + EX
        ```
        function myFunction () {
            var functionScope = "chi co the truy cap trong ham nay";
            let alsoFunctionScope = "tuong tu";
            console.log(functionScope); // OK
        }

        console.log(functionScope); // Error: functionScope is not defined
        ```
    + Global Scope (Toàn cục): Biển được khai báo ở một dòng code tự do, không nằm trong khối hay hàm
        + EX
        ```
        var globalVar = "toi la bien toan cuc";
        let globalLet = "toi cung la bien toan cuc";

        function testFunction () {
            console.log(globalVar); // truy cap duoc
            console.log(globalLet); // truy cap duoc
        }
        ```
- Mục tiêu: 
    + Biết các kiểm soát mình nên dùng gì, tránh việc đụng độ giữa hai chỗ cùng tên biến.
    + Cách tốt nhất là giới hạn phạm vi của biến hẹp nhất cỏ thể.
### 2. break và continue
#### break: 
- Dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tực
- Dùng để xử lý case để lấy số đầu tiên
- EX
    ```
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break; // thoát vòng lặp khi i = 5
        }
        console.log(i);
    }
    // Output: 0 1 2 3 4
    ```
#### continue
- Dùng dể bỏ qua phần còn lại của vòng lặp hiện tại chuyển sang vòng lặp tiếp theo
- EX
    ```
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            continue; // bo qua so chan
        }
        console.log(i);
    }
    // out put 1 3 5 7 9
    ```
### 3. Câu điều kiện nâng cao
#### a. if else
-   Thực hiện code khác nhau cho trường hợp true và false
    ```
    let score = 45; 

    if (score >=60){
        console.log("Ban da qua mon");
    } else {
        console.log("Ban can hoc lai");
    }
    ```
#### b. if else if
-   Kiểm tra nhiều điều kiện theo thứ tự
    ```
    let score = 85;

    if (score >= 90) {
        console.log("Xuat sac");
    } else if (score >= 80) {
        console.log("Gioi");
    } else if (score >= 70) {
        console.log("Kha");
    } else if (score >= 60) {
        console.log("Trung Binh");
    } else {
        console.log("Yeu");
    }
    ```

#### c. Ternary operator (toán tử điều kiện)
- Cách viến ngắn gọn cho `if else` đơn giản
    ```
    let age = 20;
    let status = (age >= 18) ? "nguoi lon" : "tre em ";
    console.log(status); // nguoi lon
    ```
### 4. Vòng lặp nâng cao
#### for in loop
- Dùng để duyệt qua thuộc tính (properties) của một object
    ```
    const person = {
        name: "John",
        age: 30,
        city: "Hanoi",
        oldAdress: { city: "Hai Phong", age: 100}
    };

    for (let key in person){
        console.log(key+ ": " + person[key]);
    }

    for (let chi in person.oldAdress){
        console.log(chi);
    }

    // output
    //  name: "John",
    //  age: 30,
    //  city: "Hanoi"
    ```

#### for each
- Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng `break` hoặc `continue`
    ```
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach(function(value){
        console.log(value)
    });
    ```
### 5. Utils function
- Là các hàm có sẵn của JavaScript giúp code trở nên nhanh hơn, gọn hơn
#### String utils
#### Array utils
