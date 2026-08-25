# TYPESCRIPT

## 1.TYPESCRIPT $ JAVASCRIPT

- TypeScript là superset của JavaScript (nghĩa là mở rộng của JavaScript).
  - JavaScript "dễ dãi" quá => nhiều lỗi
  - TypeScript ra đời để "khó tính" hơn TypeScript ra đời để "khó tính" hơn
- TypeScript ra đời để "khó tính" hơn

  ```
    npm install -d typescript
    npx tsc <file_path>
  ```

- Dùng TypeScript vì có nhiều ưu điểm so với JavaScript:
  - Có hệ thống kiểu dữ liệu
  - Phát hiện lỗi sớm
  - Interface & type alias
  - OOP features
  - Generic

## 2.DEFINE TYPE

- Trong TypeScript, có thể định nghĩa "kiểu dữ liệu" thông qua type hoặc interface.
  - type: Cú pháp sử dụng dấu bằng (=)

  ```
  type <type_name> = {
    prop1: dataType1;
    prop2: dataType2;
  }
  ```

  - interface: interface không có dấu =

  ```
  interface User {
    name: string;
    age: number;
  }
  const user1: User = {
  name: "Thuong",
  age: 18,
  }
  ```

## 3.CLASS $ EXTENDS

- Class: Dùng để mô hình hóa một đối tượng: có các thuộc tính (property) và hành vi (methods)
  - property: các đặc tính
  - methods: các hành động mà đối tượng có thể có

- Extends: Là cơ chế kế thừa (inheritance) cho phép một class "thừa hưởng" các thuộc tính và phương thức từ class khác.
  - Hàm "super()" = gọi tới hàm tạo của class cha.

# POM (Page Object Model)

- POM là một design pattern - một cấu trúc code "sạch đẹp, dễ bảo trì".
- Cấu trúc của POM
  - POM được định nghĩa bằng class với:
    - Properties: các thành phần của trang web (thường là các bộ định vị - locators như ID, CSS Selector, XPath)
    - Methods: các hành động trên trang web.

- Tiêu chuẩn của POM: không có 1 chuẩn chung nào cho POM. Việc triển khai tùy thuộc vào:
  - Framework (Playwright, Selenium, Cypress...)
  - Ngôn ngữ (TypeScript, Java, Python...)
  - Author (Người viết)
  - Sở thích
  - Kinh nghiệm

```
import { Page } from '@playwright/test';

export class MyLogInPage { //thêm export để file khác sử dụng được
    page: Page;
    logoXpath: string = "//img[@class='logo']"; //thường kh thay đổi nên gán luôn giá trị
    usernameXpath: string = "input#user_login";
    passwordXpath: string = "input#user_pass";
    buttonXpath: string = "input#wp-submit";

    constructor(page: Page) {
        //khi nào locator có thay đổi thì mới sử dụng
        this.page = page;
    }

    async fillUsername(username: string){
        await this.page.locator(this.usernameXpath).fill(username);
    }

    async fillPassword(password: string){
        await this.page.locator(this.passwordXpath).fill(password)
    }

    async clickLogin(){
        await this.page.locator(this.buttonXpath).click();
    }
}
```
