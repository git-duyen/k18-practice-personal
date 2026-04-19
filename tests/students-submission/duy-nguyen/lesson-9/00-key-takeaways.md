# Lesson 09 - Git & CSS Selector, Playwright Selector

## Git
1. Merge: gộp công việc vào trong git
    1.1 Merge stratrgy:
        1.1.1 Fast-forward merge: 
            - Khi merge không tạo ra commit merge
            - Xảy ra khi không có thay đổi nào trên nhánh main kể từ lúc tạo branch mới
        1.1.2 Three way merge
            - Khi merge có tạo ra commit merge
            - Xảy ra khi bạn muốn merge branch vào main mà lịch sử của 2 branch đã có sự khác nhau
    
2. Conflict: 2 người cùng sửa 1 vị trí trong cùng 1 file
3. Rebase:
    - Rebase 1 branch: đứng từ branch và gõ `git rebase main` (copy code từ main --> branch)
    - Đẩy các commit của bạn ở nhánh lên trên đầu, chèn các commit mới từ main vào giữa, sau đó "dán" lại các commit của bạn nối tiếp vào đó.
4. Squash: gom nhiều commit nhỏ lẻ lại thành 1 commit
    - Squash: 
    `git rebase -i HEAD~n` (n là số commit muốn gom lại thành 1 commit)
    --> insert --> replace chữ `pick` đầu commit thành chữ `s` với commit muốn merge
    --> ESC --> Gõ `:wq` --> Enter
    --> insert --> thêm dấu `#` vào đầu commit message để comment message đó 
    --> có thể update lại commit message nếu muốn --> ESC --> Gõ `:wq` --> Enter để thoát  
    
## Selector 
1. CSS selector - XPath
- tag: div                          //div
- id: #registrationForm             //form[@id='registrationForm'] 
- class: .form-group                //div[@class='form-group']
- child: #parent>input              //div[@id='parent']/input
- descendant: #ancestor div         //div[@id='ancestor']/descendant::div
- combine: div,input                //div | //input
- Adjacent sibling: #parent+div     //div[@id='parent']/following-sibling::*[1]
- General sibling: #parent~div      //div[@id='parent']/following-sibling::*

2. Playwright selector
- page.getByRole()
    - button:   `await page.getByRole('button', {name: 'Submit'}).click();`
    - link:     `await page.getByRole('link', {name: 'Learn more', exact:true}).click();`
    - textbox   `await page.getByRole('textbox', {name: 'Search product', exact: true}).fill('hoctest.com');`
    - combobox: `await page.getByRole('combobox', {name: 'Country selection'}).selectOption('Vietnam');`
    - checkbox  `await page.getByRole('checkbox', {checked: true});`
    - radio     `await page.getByRole('radio', {name: 'Male', exact: true}).click();` --> exact: true để lấy đúng radio button 'Male' vì có radio button 'Female' nữa là 2 cái, không biết chọn cái nào (thuộc tính: {name} không phân biệt hoa thường nên sẽ tìm thấy 2 elements)
    - table/row/cell:   
        `await page.getByRole('table', {name: 'User data table'});`
        `await page.getByRole('row', {name: /Duy/});`
    - heading   `const text = await page.getByRole('heading', {name: "Title", level: 1}).textContent();`
    - listitem  `const count = await page.getByRole('listitem').filter({hasText: 'Phở'}).count();`
- page.getByText()
    `await page.getByText('Welcome back').click();` // Tìm chính xác text
    `await page.getByText('Welcome', {exact:false})`// Tìm text có chứa (substring)
    `await page.getByText(/welcome/i);` //Dùng regex (case insensitive)
    `await page.getByText(/^hoctest$/i);` --> Bắt đầu và kết thúc bằng từ `hoctest`, chữ i là không phân biệt chữ hoa, chữ thường
    --> `getByText` sẽ luôn normalize space (trim space đầu và cuối chuỗi) trước khi tìm  
    `await page.locator('div').getByText('Hello');` // Kết hợp với các locator khác 
- page.getByLabel()
    `await page.getByLabel('Email address').fill('abc@gmail.com');`
    `await page.getByLabel('Email', {exact: false}).fill('abc@gmail.com');`
    `await page.getByLabel('Password').nth(0).fill('strongpassword');` --> `nth(0, 1, 2, 3 ...)` là chọn element thứ mấy, ngoài ra `first` là lấy element đầu, `last` là lấy element cuối
- page.getByPlaceholder()
- page.getByAltText()
    `await page.getByAltText('Product 1').click();`
- page.getByTitle()
- page.getByTestId()

