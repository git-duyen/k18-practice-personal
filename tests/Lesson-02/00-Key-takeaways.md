# Tổng hợp kiến thức bài 02
### 3 vùng trạng thái trong git
1. working directory
2. Stagig area
3. Repository
---
### Một số câu lệnh dùng trong git
1. git status >> Check trạng thái các file đang nằm trong vùng nào
     - Working directory: file màu đỏ
     - Staging are: file màu xanh
     
2. git log >> xem lại lịch sử chạy lệnh trong git
    - git innit >> khởi tạo git
    - git add . >> add tất cả các file từ vùng working directory sang staging area
    - git commit -m 'message' >> move các file từ vùng staging area qua vùng repository (lưu thành 1 phiên bản)
        - Cách comment (ghi message) khi commit tạo 1 phiên bản trên git:
            - chore: các thay đổi nhỏ lẻ, remove file không quan trọng
            - feat:  thêm tính năng mới, add thêm testcase, ...
            - fix: sửa lỗi
 ---   
### Học về biến và hằng

1. Biến var: cũ, cho phép khai báo lại, mức độ effect có thể vượt khỏi phạm vi 1 block code
2. Biến let: mới hơn, chặn ko cho khai báo lại giá trị, mức đô effect hạn chế trong 1 lock code >> an toàn hơn khi dùng
3. Hằng (const): value là cố định

    ==> Luôn dùng hằng, chỉ dùng biến let khi biết chắn chắc là sẽ cần gán lại giá trị, ko dùng var-
---
### Các data type
1. Boolean: 
    - True
    - False
2. String: ký tự được định nghĩa phải nằm trong các dấu sau
    - Ngoặc đơn
    - Ngoặc kép
    - Backtick: khi chuỗi có chứa biến, bắt buộc phải dùng dấu backtick
3. Number:
    - Số nguyên
    - Số thực
    - Vô hạn
    - Không phải số
4. So sánh: <, > ,===, !==

    ===: không chuyển đổi dữ liệu khi so sánh >> nên dùng

    !== : Có chuyển đổi dữ liệu khi so sánh
   
    Ví dụ:   
    Console.log (5==='5') ==> Fail  
    Console.log (5=='5'); ==> True
5. Toán tử 1 ngôi: a++, ++a, a--, --a  
    Ví dụ:  
    const a = 10;  
    b = ++a;  
    ==> Giá trị tăng lên trước sau đó gán cho b  
        --> a =11, b=11

    const c = 10;  
    d = c ++;  
    ==> giá trị c mang gán cho d, sau đó c tăng giá trị  
    --> c = 11, d = 10
6. Toán học: +, -, *, /
7. Điều kiện
    - if...  
        if (điều kiện){  
            //Code;  
        }
    - if...else
    - if...esle...if...else
    - switch...case
    
8. Vòng lặp  
    - for (i)  
         for(<điều kiện khởi tạo>,<điều kiện lặp>,<cập nhật>){  
            //code;  
        }  
    - for (of)  
    ...  
    
**Cách nhận biết loại dữ liệu**  
 ==> dùng typeof  
    ví dụ:  
    const name = "Nguyễn Thị Lượm";  
    console.log (typeof name);

``` 
Lưu ý: luôn làm đẹp code trước khi commit bằng cách:
    - Right click vào vùng viết code > Format Document
    - Shift + Alt +F
