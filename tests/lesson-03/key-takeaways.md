## Cách revert file trong git
- **git restore -staged <file_name>**: chuyển file từ vùng staging area vế working directory
- **git reset HEAD~<số commit>**: Chuyển file từ repository về working directory (tương ứng số commit mới nhất được commit lên)
## Kiến thức về nhánh trong git
- **git branch <branch_name>**: tạo 1 nhánh mới
- **git branch**: check xem trong folder project hiện tại có bao nhiêu branch, branch nào đang là nhánh chính (có dấu sao ở đầu)
- **git branch d <branch_name>**: xóa branch được chỉ định
    - Phải đang đứng khác nhánh bị xóa
- **git checkout <branch_name>**: chuyển branch thành nhánh chính
    - Đang đứng ở nhánh nào commit file, thì file chỉ tồn tại trong nhánh đó
- **git checkout -b <branch_name>**: vừa tạo branch, vùa đặt branch làm nhánh chính  

    ``` Chú ý: Luôn pull code về trước khi tạo nhánh mới ```
- **gitignore**: fill tên các file muốn bỏ ra sự quản lý của git vô folder này  
    ``` dùng #nội dung commt trong file gitignore ```

## Một số convention phổ biến
- **snake_case**: duyen_nguyen >> tạm thời ko dùng
- **kebab-case**: duyen-nguyen >> dùng đặt tên file/ folder
- **camelCase**: duyenNguyen >> dùng cho biến/ hàm
- **PascalCase**: DuyenNguyen >> dùng cho class
- **UPPER_CASE**: DUYEN_NGUYEN >> tạm thời không dùng
## Học về object
```không được thay đổi giá trị của object ```  

- **Học cách lấy ra giá trị của 1 key trong object**  
    const myInfo = {  
        name: "Duyen",
        age: 18,  
        codingClass{  
            name: "PlayWright",  
            level: "Beginer"  
        }  
    }  
    console.log(myInfo.name); // Duyen  
    console.log(myInfo.codingClass.name) //Playwright  
    console.log(myInfo ["name"]); // Duyen  
    console.log(myInfo ["codingClass"] ["name"]) //Playwright  
## Học về mảng (Array)
- **Học cách lấy ra giá trị của 1 phần tử trong mảng**  
    const arr [15, 16, 58, 95]  
    Console.log (arr[3]); //95  
    console.log(arr.lenght) // in ra độ dài của mảng, = 4
## Học về hàm
``` Trong trường hợp đoạn code được dùng đi dùng lại ```  
- **Học cách gọi hàng với giá trị biến được truyền vào:**    
    function tinhDienTich(dai, rong){  
        const dienTich = dai * rong;  
        console.log(`Dien tich hinh chu nhat (${dai} x ${rong}) = ${dienTich}`)  
    }  
    tinhDientich (10 , 5); //Dien tich hinh chu nhat (10 x 5) = 50  

- **Học lệnh return để trả về kết quả của hàm**  
        function tinhDienTich(dai, rong){  
        const dienTich = dai * rong;  
        return dienTich;   
    }  
    console.log(tinhDienTich(20,5)); //100
