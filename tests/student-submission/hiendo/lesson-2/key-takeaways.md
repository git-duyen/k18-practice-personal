# Tổng hợp kiến thức đã học từ lesson 2
## Git
1. Khu vực làm việc của git có 3 vùng:
- Working directory -> Staging Area -> Repository 

-> Hiểu đơn giản là code mới tạo ở máy local thuộc vùng **working directory** -> dùng lệnh `git add <file name>` để copy file code vừa tạo đó lên vùng **staging area** hoặc là dùng lệnh `git add .` để copy tất cả file thuộc vùng **working directory (local)** lên vùng **staging area**. Tiếp đó có thể dùng lệnh `git commit -m "message"` để đẩy file lên **repository**, lúc này file thuộc vùng **staging area** sẽ bị biến mất

2. git workflow (tùy vào cách sử dụng mà có thể cấu hình linh hoạt dùng flag global cho tất cả các repo trên máy hoặc chỉ áp dụng riêng config user.name với user.email cho 1 repo cụ thể)  
- Dùng global config: init -> config (chỉ cấu hình lần đầu) -> add -> commit -> push  

-> Hiểu là từ lần khởi tạo ban đầu -> User cần chạy lệnh `git init` cho thư mục muốn git quản lý (vd repo 1) -> User khai báo user.name và user.email cho repo 1 -> Lần lượt dùng lệnh `git add` -> `git commit` -> `git push` để push code lên github. Từ lần 2 trở đi, user chỉ cần chạy lệnh `git add` -> `commit` -> `push`. Và không chỉ riêng repo 1, nếu đã cấu hình git trước đó mà dùng biến global thì tất cả các repo sau này lúc khởi tạo xong sẽ không cần chạy lệnh git config nữa, do flag global đã áp dụng user.name và user.email cho tất cả các repo khác. Nếu muốn 1 repo nào đó không dùng name và email này thì sẽ cần cấu hình lại và bỏ flag global đi.  

- Không dùng global config: init -> config (cấu hình cho mỗi repo) -> add -> commit -> push  

-> Hiểu là từ lần khởi tạo ban đầu -> User cần chạy lệnh `git init` cho thư mục muốn git quản lý (vd repo 1) -> User khai báo user.name và user.email cho repo 1 -> Lần lượt dùng lệnh `git add` -> `git commit` -> `git push` để push code lên github. Từ lần 2 trở đi, user chỉ cần chạy lệnh `git add` -> `commit` -> `push` cho riêng repo 1 mà không cần phải config lại user.name hay user.email. Nhưng nếu muốn git quản lý 1 repo khác, ví dụ repo 2 -> thì sau khi git init user sẽ phải khai báo lại user.name và user.email cho repo 2  

## Javascript
1. Biên dịch 1 file thì dùng lệnh `node filename.js`  
2. Cần phải `cd` đến folder chứa file js để run code  
3. Có thể comment code theo dòng bằng lệnh `//` hoặc comment đoạn code bằng cách bôi đen đoạn code đó và nhấn `Ctrl + /` hoặc `/* */`  
4. Biến + Hằng  
- Biến là giá trị biến thiên, có thể thay đổi (ưu tiên dùng let hơn dùng var vì nếu lỡ quên khai báo trước đó thì dùng let sẽ báo lỗi, có thể dễ debug; còn dùng var nó ghi đè giá trị biến cũ thì khó debug hơn)  
- Hằng là hằng số, không thể thay đổi được  
=> Ưu tiên khai báo hằng để dùng, không nên dùng biến  
5. Toán tử 1 ngôi  
- Prefix: `++x`, `--y`  
-> Tăng trước, trả về sau, ví dụ:  

```js
let d = 10; 
c = ++d; // d = 11, c = 11
c = --d;     // d = 10, c = 10
```
- Postfix: `x++`, `y--`  
-> Trả về trước, tăng sau, ví dụ:  

```js
let d = 10; 
c = d++; // d = 11, c = 10
c = d--;     // d = 9, c = 10
```
6. Loop
```js

for (i = 0; i < 30; i++) {
   // kq muốn in ra
}
```

-> i = 0 là điều kiện khởi tạo, i < 30 là điều kiện thực thi hoặc điều kiện dừng, i++ là điều kiện cập nhật. Từ i = 0, kiểm tra nếu điều kiện khởi tạo nằm hợp lệ trong điều kiện cập nhật thì thực thi, sau đó cập nhật giá trị i rồi thực hiện vòng lặp lần lượt đến khi nào thuộc điều kiện dừng thì thôi