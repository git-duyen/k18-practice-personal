Function expression: định nghĩa function bằng cách gán nó cho 1 biến

    //khai báo hàm
    Function add(a, b){
        Return a+b;
    }
    Add(2, 3);
    
    //biểu thức hàm
    Const add = function(a, b){
        Return a+b;
    }
    Add(2, 3);
    
Lambda function: viết function ngắn gọn hơn, dùng dấu =>. Nếu có 1 dòng duy nhất => khỏi {} luôn
    Const add = (a, b) => {
        Return a+b;
    }
    
    Const add = (a, b) => { return a+b };
hoặc consr add = (a,b) => a+b;

    + Không có tham số thì () thôi
    + 1 tham số: bỏ dấu () luôn
        Const double = x => return x*2;
        
Hàm ẩn danh: không có tên, chỉ sử dụng khi function chỉ cần dùng 1 lần (PHẢI GÁN CHO BIẾN) hoặc làm callback
    //hàm ẩn danh, gán cho biến
    Const result = function(){
        Console.log("hi");
    }
    
    //dùng làm callback
    setTimeout(function() {
        Console.log(`callback`);
    }, 1000);
    
DOM
    Element: <thẻ mở thuộc tính = giá trị> text </thẻ đóng>
    
Selector: có 3 loại: PW selector > CSS selector > XPath
    + Xpath: dùng trong hầu hết các trường hợp - đa dạng, tìm phần tử khó - hơi dài
    + Css selector: ngắn gọn - cho trường hợp dễ tìm - không linh hoạt
    + PW selector: dùng riêng cho PW - ngắn gọn, không phụ thuộc DOM - hướng tới "giống người dùng nhìn thấy gì"
    
    + Xpath - XML path: có 2 loại
        ○ Tuyệt đối: đi dọc theo DOM, bắt đầu bởi 1/
        ○ Tương đối: tìm dựa vào đặc tính, bắt đầu bởi 2// => nên dùng
        //tenthe[@thuoctinh="giatri"]
        
PW basic syntax
    - Automation = tương tác + verify
    - Tên file: …-…spec.ts

        + Import tv PW
            Import {test} from '@playwright/test';
        
        + Test: đơn vị cơ bản để khai báo 1 test
            test('<tên test>', async ({page}) => {
                //code
            });
        
        + Step: đơn vị nhỏ hơn test, khai báo từng step của test case. Nên map 1-1 với step trong test case
            Await test.step('Tên step', async () => {
                //code
            });
            
    - Basic action: 
    + Navigate: page.goto('https://…');
    + Locator: page.locator(“<selector>”)
    + Click:
        ○ Single click: page.locator(“<selector>”).click();
        ○ Double click: page.locator(“<selector>”).dblclick();
        ○ Right click: page.locator(“<selector>”).click({
                    Button: 'right'
                })
        ○ Click kèm phím bấm khác: page.locator(“<selector>”).click({
                            Modifiers: ['Shift'],
                             })
        ○ Click nhiều lần: page.locator(“<selector>”).click({
                        clickCount: <số lần click>
                       })
        
        
    + Input:
        ○ Fill: copy rồi paste toàn bộ vào ô input:
            Await page.locator(“<selector>”).fill('abcdef');
            
        ○ pressSequentially: gõ từng chữ cái vào ô input
            Await page.locator(“<selector>”).pressSequentially('123456', {
                Delay: 1_000,
            });
            
    + Radio/checkbox:
        ○ Lấy giá trị hiện tại có đang check hay không
            Const isChecked = await page.locator(“<selector>”).isChecked();
            
        ○ Check / uncheck
            Await page.locator(“<selector>”).check();
            Await page.locator(“<selector>”).setChecked(false);
            
    + Select:
        Await page.locator(“<selector>”).selectOption({label: 'USA'})// value hoặc text
    
    + Upload file:
        Await page.locator(“<selector>”).setInputFiles("<file path>");
        
    + Confirmation dialog: 
        //xử lý dialog trước khi dialog xuất hiện
        Page.on('dialog', dialog => dialog.accept());
        //làm dialo xuất hiện
        Await page.locator(“<selector>”).click();
