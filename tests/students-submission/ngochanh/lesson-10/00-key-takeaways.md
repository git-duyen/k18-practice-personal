Biên dịch TS -> JS: `npx tsc <file-path>`

Sau đó chạy: `node <file-path>`

PW: `npx playwright test <file-path>`

Extends: dùng super() để gọi tới hàm tạo của class cha
```
    constructor(headingLoc: string, param1: string, param2: string){
            super(param1, param2); //param1 ~ usernameLoc constructor của class cha, param2 ~ passwordLoc
            this.headingLoc = headingLoc;
        }
```
    
# POM 
POM: cấu trúc code sạch - đẹp - dễ bảo trì. Hiểu đơn giản POM là class; với các thành phần trên trang web là các thuộc tính còn các hành động trên trang web là các phương thức

- Khi điền, lấy giá trị, click -> thêm async await

File pom.ts:
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
File test:
```
import { test, expect } from '@playwright/test';
import { MyLogInPage } from './pom'; //import class vào, filename có thể không cần ghi rõ ".ts"
                            // ./ là cùng thư mục, nếu muốn back ra 1 cấp thì ../
 
test.describe("AUTH-Authentication", async () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new MyLogInPage(page);

        await test.step("Open page", async () => {
            //await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await loginPage.page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        })
    });

    test("@AUTH_002: Login success", async ({ page }) => {
       const loginPage = new MyLogInPage(page);

        await test.step("Nhập vào thông tin username, password đúng", async ({ }) => {
            const usn = 'betterbytes.academy.admin';
            const pw = 'StrongPass@BetterBytesAcademy';

            //await page.locator("input#user_login").fill(usn);
            await loginPage.fillUsername(usn);

            //await page.locator("input#user_pass").fill(pw);
            await loginPage.fillPassword(pw);
        });

        await test.step("Click button login", async ({ }) => {
            //await page.locator("input#wp-submit").click();
            await loginPage.clickLogin();
        });
    });
});
```

Refactor: viết lại code 1 cách khoa học mà không đổi tính đúng đắn và chức năng
-> giúp code dễ tiếp cận - đọc - hiểu -> giúp bảo trì, mở rộng hệ thống 
- Refactor khi:
    - Thêm chức năng mới vào code cũ
    - Review code
    - Bàn giao lại
- Dấu hiệu cần refactor:
    - Method, function quá dài
    - Param trong method, function quá nhiều
    - Class quá lớn

