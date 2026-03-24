# TypeScript: 
1. So sánh với Javascript
- Là supperset của Javascript
- Code ts cần được biên dịch qua js trước khi chạy 
> npm install -d typescript

> npx tsc <file_path>

> node <file_path>

- Dùng ts ví có ưu điểm so với js 
    + Có hệ thống kiểu dữ liệu 
    + Phát hiện lỗi sớm
    + Interface & type alias
    + OOP feature 
    + Generic
    + ...
- Có thể định nghĩa kiểu dữ liệu thông qua type và interface
> type <name_type> ={
    prop1: dataType1;
    prop2: dataType2;
}

> interface <name> {
    prop1: dataType1;
    prop2: dataType2;
}

2. Kế thừa
- Extends= Kế thừa 
- Là cơ chế kế thừa cho phép một class "thừa hưởng" các thuộc tính và phương thức từ class khác
- Hàm "super()" = gọi đến hàm tạo của class cha
- Kế thừa giúp bạn tái sử dụng các thuộc tính của phần tử cha.
- Hàm tạo (constructor) là hàm sẽ chạy khi bạn khởi tạo một object.

    Ví dụ:
    Hàm tạo:

    TypeScript
    export class SimpleClass {
        constructor() {
            console.log("Hello Playwright");
        }
    }

- Sử dụng:
    + TypeScript
    > const instance = new SimpleClass();
- Khi khởi tạo một đối tượng mới từ class SimpleClass, hàm console.log sẽ tự được chạy.
- Từ khóa super() dùng để gọi hàm tạo của hàm cha. Khi kế thừa, bạn luôn cần gọi super() trong hàm cha.
![](../lesson-10/img/Screenshot%202026-03-19%20at%2022.29.12.png)

3. POM
- Bằng class với 
    + Properties: Các thành phần của ttrang web 
    + Methods: Các hành động ttrên trang web 
        + Luôn bắt đầu bởi động từ
![](../lesson-10/img/Screenshot%202026-03-19%20at%2022.31.49.png)

Tại file test.spec.ts

    TypeScript
    import { LoginPage } from './page/login-page';
    // Some code...

- Lưu ý:
- Cấu trúc thư mục:
    + test.spec.ts
    + page
    + login-page.ts
    + from './page/login-page'; là đường dẫn để tới login-page cần import. 
- Do login-page này nằm trong thư mục page nên cần định nghĩa vào trong import.
- Ta có thể viết from './page/login-page.ts'; hoặc bỏ đuôi .ts trong phần import: from './page/login-page';, vì Javascript sẽ tự động thêm đuôi .ts khi tìm kiếm.
- Để import file nằm ở thư mục bên ngoài, ta dùng .. để đi ra folder cha của folder hiện tại. VD: '../../login-page.ts'.
- POM giúp code tổ chức gọn gàng hơn, dễ bảo trì hơn.
- POM gồm 2 thành phần chính:
    + Các thuộc tính (property): đại diện cho các phần tử trên trang.
    + Các phương thức (method): đại diện cho các hành động trên trang.
- Hàm tạo của POM thường có thuộc tính page. Ta sẽ dùng page này để tương tác với trang web.
- Thuộc tính page này nếu đã xuất hiện trong POM cha rồi thì bạn không cần định nghĩa ở POM con nữa.

4. Export
- Từ khóa export giúp chúng ta có thể xuất 1 biến, 1 hằng số ở 1 file và nhập (import) dùng ở file khác.

    Ví dụ:
    Tại file login-page.ts

    TypeScript
    export class LoginPage {
        // Some code...
    }

5. Kiến thức bổ sung: Refactoring
- Refactoring là viết lại source code một cách khoa học hơn mà vẫn giữ được tính đúng đắn và giá trị về chức năng của source code đó.
- Tại sao phải refactoring code?
    + Refactoring không hề làm hệ thống chạy nhanh hơn, bảo mật hơn tuy nhiên nó sẽ giúp source code dễ tiếp cận, dễ đọc, dễ hiểu từ đó giúp ích rất nhiều cho quá trình bảo trì, mở rộng hệ thống.
- Khi nào thì thực hiện refactoring?
    + Bất cứ khi nào bạn muốn đoạn code của mình "tốt hơn" thì đều có thể thực hiện refactoring. Tuy nhiên một số giai đoạn dưới đây được cho là thích hợp hơn để làm refactoring:
    + Khi thêm chức năng mới vào source cũ.
    + Khi tiến hành review code.
    + Khi cần handover (bàn giao) lại.
- Một số dấu hiệu cần refactoring (smell)
    + Smell: Method, functions quá dài.
    + Smell: Quá nhiều parameters trong method, functions.
    + Smell: Class quá lớn.