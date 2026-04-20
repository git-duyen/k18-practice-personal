# Git MERGE:
- Merge strategy:
    + Fast-forward: không tạo ra commit merge; xảy ra khi không có thay đổi nào trên nhánh chính kể từ lúc tạo đến khi merge nhánh feature     
    + Three-way: tạo ra commit merge; xảy ra khi muốn merge feature branch vào nhánh chính, mà lịch sử của 2 nhánh đã có khác biệt
 
==> Rebase: để không tạo commit merge, ta cập nhật nhánh nhỏ dựa theo nhánh chính rồi mới merge
# Rebase 
Tại nhánh nhỏ: git rebase <tên nhánh chính>
        
# Squash: 
Có nhiều commit nhỏ lẻ muốn gom lại ~ rebase trên chính nó
- Git rebase -i HEAD~<số commit>
- Giữ commit trên cùng làm gốc, sửa các chữ pick commit khác thành chữ s, gõ :wq
- Muốn giữ commit message nào thì không comment commit message, còn lại comment hết bằng #, gõ :wq

# Conflict
Conflict: xảy ra khi 2 người cùng sửa 1 file sau đó merge với nhau:
    + Nằm giữa <<<HEAD và ===: nội dung nhánh hiện tại
    + Nằm giữa === và >>><tên branch muốn merge>: nội dung nhánh muốn merge

# CSS selector    
CSS selector: nhanh hơn xpath
    
# PW selector
- page.getByRole(): 
    + button: await page.getByRole('button', { name: 'Submit' }).click();
    
    + link: 
        - await page.getByRole('link', { name: 'Learn more' }).click();
        - await page.getByRole('link', { name: 'Learn more', exact: true }).click();
    
    + textbox: await page.getByRole('textbox', { name: 'Search products', exact: true }).fill("hello");
    
    + combobox: await page.getByRole('combobox', { name: 'Country selection', exact: true }).selectOption("Viet Nam");
    
    + checkbox: 
        - await page.getByRole('checkbox', { checked: true }); //tìm checkbox đã được check
        - await page.getByRole('checkbox', { name: "Option" }).check();
        
    + radio: 
        - await page.getByRole('radio', { name: 'Male' }).nth(0).click(); //index = 0, có chứa cụm "male"
        - await page.getByRole('radio', { name: 'Male', exact: true }).click(); //chính xác cụm = "male"
    
    + heading: await page.getByRole('heading', { name: 'Dashboard', level: 1 }).textContent(); //text = Dashboard, level 1

    + listitem: await page.getByRole('listitem').filter({ hasText: "Ph"}).textContent();//item chứ "Ph"
    
    + table: table, row, cell: 
        - const email = await page.getByRole('cell', { name: /john@/ }).textContent();
        - await page.getByRole('table', { name: 'User table' })
    
    + dialog: 
        - await page.getByRole('dialog')
        - await page.getByRole('dialog').getByRole('button', { name: 'Confirm' });
    
- page.getByText(): luôn normalize trước (ví dụ có string >2 spaces biến thành 1 spaces) và nếu input là button hoặc submit sẽ tìm theo value chứ kh phải text content
    + await page.getByText('Hello World').click(); // tìm chính xác text
    + await page.getByText('Hello', { exact: false }); //tìm chứa subtring
    + await page.getByText(/hello/i); //regex: case insensitive
    + await page.locator('div').getByText('hello'); //kết hợp locator khác
    Ví dụ: \
    ```
    <div>HocTest
        <span>.com</span>
    </div>
    ==> await page.getByText('HocTest.com'); //nối text trong element lại
    ```
    Ví dụ: 
    ```
    <input type=button value="Log in">
        ==> await page.getByText('Log in');
    ```   
- page.getByLabel(text, option): tìm element thông qua text của label liên kết với nó. Ví dụ 1 checkbox có ô checkbox là tag input, liền kề nó là tag label và có attribute for='id input' nên khi click label thì checkbox cũng được checked
    + tìm input thông qua label chính xác
    `await page.getByLabel('Email address').fill('test@gm.co');`
    + for có value  bằng id của input => được dùng text của label
    ```
    <label for='email'>Email address</label>
    <input id='email' type='email'>
    ```
    + tìm theo substring
    `await page.getByLabel('Email', { exact: false }).fill('test@gm.co');`
    
    + thêm vị trí bằng first(), last(), nth(<index>)
        ```
        await page.getByLabel('Password').first().fill("123456");//cho Password
        await page.getByLabel('Password').last().fill("123456");//cho Confirm Password
        await page.getByLabel('Password').nth(0).fill("123456");
        ```
    
- page.getByPlaceholder():
    `await page.getByPlaceholder('Input your first name').fill('Hanh');`
    
- page.getByAltText(): cho hình ảnh (alternative text):
    `await page.getByAltText('Hello World').click();`
    
- page.getByTitle():
    `await expect(page.getByTitle('Hello World')).toHaveText('25 issues');`
    
- page.getByTestId(): mặc định dùng cho attribute "data-testid"

    `<button data-testid="directions">Send</button>`
    
    Or      
    `<button id="directions">Send</button>`

    ```
    await page.setTestIdAttribute('id');
    await page.getByTestId('directions').click();
    ```
