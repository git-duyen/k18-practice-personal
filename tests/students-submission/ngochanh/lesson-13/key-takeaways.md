# Object destructuring
- Lấy các giá trị  thuộc tính trong  Object; giúp code ngắn gọn hơn
- Ví dụ
    ```
    const myClass = {
        school: 'BBA',
        course: 'Full stack'
    };
    
    //Không có destructuring
    const school = myClass.school;
    const course = myClass.course;
    //mỗi thuộc tính cần 1 dòng code để lấy giá trị
    
    //Có destructuring
    const {school, course} = myClass;
    //step 1: khai báo 2 biến school và course
    //step 2: lấy thuộc tính key = school, course và gán giá trị vào
    ```
- Nâng cao:
    + Multiple property: dùng khi muốn destructuring object nhiều thuộc tính:
    `const {prop1, prop2, ... propN} = object;`
    + Default value: dùng khi muốn đặt giá trị mặc định cho mội thuộc tính:
    `const {prop = 'Default'} = object;`
    + Alias: dùng khi muốn đặt tên khác cho property:
    `const {prop: myProp} = object;`
    + Deep property: dùng khi muốn destructuring các object nằm sâu bên trong 1 object khác:
    `const {prop: {deepProp}} = object;`

# Fixture
- Fixture: concept cơ bản được PW build sẵn, giúp test đơn giản hơn
- Dùng để:
    + Tái sử dụng setup/teardown
    + Chia sẻ object giữa các test
    + Tạo môi trường test độc lập
    + Mở rộng built-in fixture (page, context, browser)
    + Nhóm test theo ngữ nghĩa thay vì common setup
    
- Các loại fixture: (nhớ bỏ fixture dô async của test)
    + page (Page):  tự động mở trình duyệt, tạo 1 tab
  
    + context (BrowserContext): mở trình duyệt nhưng không có tab (chưa có page) -> mở nhiều tab
        ` const page = await context.newPage(); // như này mới tạo tab `
    + browser (Browser): dùng chung giữa các test để tối ưu tài nguyên (chưa có context luôn) -> mở nhiều browser
        ```
        const context = await browser.newContext();
        const page = await context.newPage();
        ```
    + browserName (browserName): tên browser đang chạy (chromium, firefox, webkit)
        `console.log(browserName); //in tên browser`
    --> Ứng dụng: tìm điều kiện để chọn chạy trên trình duyệt nào, bỏ qua test nếu browser không phù hợp…
    + request (APIRequestContext): 1 APIRequestContext instance độc lập
    
# Custom fixture
- Tại file custome fixture fixture.ts:
    ```
    import {test as base} from '@playwright/test'
    import {kiểu-dữ-liệu-muốn-mở-rộng-thành} from 'file pom'
    //
    const test = base.extend<{tên-mở-rộng: kiểu-dữ-liệu-muốn-mở-rộng-thành}>({
        //target: khi gọi tên-mở-rộng sẽ tạo 1 object mới và sử dụng được
        //định nghĩa phần mở rộng được sử dụng như nào
        tên-mở-rộng: async ({ page }, use) => { //dùng fixture
            //khởi tạo 1 object mở rộng
            const tên-mở-rộng= new kiểu-dữ-liệu-muốn-mở-rộng-thành(page);
            //các hành động muốn thực hiện trước khi test chạy
            //ví dụ đi trang 1 trang và expect text
            await tên-mở-rộng.go();
            await expect(tên-mở-rộng.page.getByText('expected text')).toBeVisible();
            
            await use(tên-mở-rộng); //run test 
            
            //code teardown
        }
    })
    
    export {test};
    ```
- Tại file test:
    ```
    //import {expect, test} from '@playwright/test'
    import {expect} from '@playwright/test'
    import {test} from 'file fixture'
    
    //test("Registration", async ({page}) => {
    //        await page.goto("https://…);
    //        await page.getByText("Bai 1").click();
    //        await expect(page.getByText("Bai 1")).toBeVisible();
    //});
    
    test("Registration", async ({tên-mở-rộng}) => {
            await tên-mở-rộng.page.getByText("Bai 1").click();
            await expect(tên-mở-rộng.page.getByText("Bai 1")).toBeVisible();
    });
    ```
    
# Nâng cao fixture
- Overriding fixtures
- Worker-scoped fixtures
- Automatic fixtures
- Fixture timeout
- Fixtures-options
- Excution order

# Test generator
- Thao tác -> sinh ra code
- Các assert:
    + Visible
    + Value: input trong input field
    + Snapshot 

# Video recording
- Mục đích:
    + Debug test dễ dàng hơn (ví dụ thao tác quá nhanh)
    + Tạo evidence
- Cách dùng: sửa file playwright.config.ts, mục use thêm: `video: '<mode>'` (clear cache)
- Các mode:
    + off: kh record
    + on: record tất cả các test
    + retain-on-failure: record hết nhưng chỉ giữ test fail
    + on-first-retry: record nhưng test fail và retry
