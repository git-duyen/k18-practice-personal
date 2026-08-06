# DOM terminologycisab <br> Playwight basic
## I. Fuctions advance
### 1. Function expression
Định nghĩa **Function** bằng cách gán cho nó một biến.
#### Function Declaration (Khai báo hàm)
```
function add (a, b){
    return a + b;
};
```
#### Function Expression (Biểu thức hàm)
```
const add = function (a, b){
    return a + b;
};
```
#### So sánh cách gọi
```
console.log(add(2, 3)); // 5 - cả hai đều giống nhau
```
### 2. Lambda function (Arrow function)
- Cách viết ngắn gọn hơn cho function
- Sử dụng dấu `=>`
#### Arrow function
```
const add = (a, b) => {
    return a + b;
}
```
### Cách viết khác:
#### Implicit return (Chỉ có 1 dòng code duy nhất)
`const add = (a, b) => a + b;`
#### Không có tham số (Phải có ngặc tròn rỗng)
`const greet = () => console.log("Hello");` <br>
`const getRandom = () => Math.random();`
#### Một tham số
- Có thể bỏ dấu ngoặc tròn: <br>
`const doule = x => x * 2;` <br>
`const square = x => x * x;`
- Hoặc giữ giấu ngoặc tròn: <br>
`const triple = (x) => x * 3;` <br>
### 3. Anonymous function (Hàm ẩn danh)
- Function không có tên
- Được sử dụng khi function **dùng một lần** hoặc **làm callback**
#### Named function (Có tên)
```
function namedFunction () {
    console.log('I'm have a name');
}
```
#### Anonymous function (Không tên)
```
function() { // SyntaxError: không thể đứng một mình
    consle.log('I'm anonymous');
}
```
#### Anonymous phải được sử dụng ngay
**Gán một biến**
```
const anonymousFunc = function () {
    console.log("I'm anonymous but stored in a variable");
};
```
**Dùng làm callback**
```
set Timeout ( function () {
    console.log("Anonymous callback");
}; 1000);
```
## II. DOM (Document object Model)
### 1. Hiểu về một website
- Khi vào một website **ta nhìn thấy**
    + Các khối text
    + Các hình ảnh
    + Các liên kết
    + Các ô input
- **Máy tính** sẽ nhìn thấy ở dưới dạng "cây có cấu trúc"
    + Xem bằng cách F12
    + Cấu trúc ngày gọi là DOM (Document Object Model)
### 2. Các thể HTML thường gặp
Trên thực tế có rất nhiều loại thẻ khác nhau
- Thẻ tiêu chuẩn: Do tổ chức Mozilla định nghĩa
- Thẻ tự định nghĩa: Do dev tự định nghĩa
## III. Selector
- Dùng để tương tác các phần tử trên web
- Để tương tác chúng ta cần tìm phần tử này
- Selector là công cụ giúp chúng ta tìm
## IV. Playwright basic syntax
#### Automation = tương tác + verify
### 1. Cách tương tác với các phần tử
- Viết một test <br>
`import { test } from '@playwright/test';`
- Tổ chức step
```
test('Basic actions', async ({ page }) => {

    await test.step('step1', async () => {
        // code
    });

    await test.step('step1', async () => {
        // code
    });
});
```
- Tương tác cơ bản
    + Navigation: <br>
     ```
     await page.goto("https://material.playwrightvn.com/");
     ```
    + Click: <br>
    ```
    await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    ```
    + Fill
    ```
    await page.locator("//input[@id='username']").fill("Thanh Phan");
    ```
    + ... 

EX: basic-action.spec.ts
```
import { test } from '@playwright/test';

test('Basic actions', async ({ page }) => {

    await test.step('Navigate to material web', async () => {
        // đến trang web
        await page.goto("https://material.playwrightvn.com/");

    });

    await test.step('Click bai hoc 1', async () => {
        // locate vào phần tử
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click()
    });

    await test.step('Input', async () => {
        // Input value
        await page.locator("//input[@id='username']").fill("Thanh Phan");
        await page.locator("//input[@id='email']").pressSequentially("thanhphan@gmail.com", { delay: 100 });
    });

    await test.step('Radio check', async () => {
        // kiểm tra giá trị hiện tại có đang được check hay không
        let isCheckedMale =
            await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);

        // Check radio đó
        await page.locator("//input[@id='male']").check();
        isCheckedMale =
            await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);
    });

    await test.step('Drop down', async () => {
        await page.locator("//select[@id='country']").selectOption({ value: "uk" });
    });

     await test.step('Input file', async () => {
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/data-test.txt");
    });

});
```



