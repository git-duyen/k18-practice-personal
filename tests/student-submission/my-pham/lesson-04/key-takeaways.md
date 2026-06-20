1. Javascript nâng cao
- Phạm vi của biến
- break & continue
- vòng lặp nâng cao
- câu điều kiện nâng cao
- utils functions

- Phạm vi của biến
Phạm vi (scope): xác định nơi mà biến có thể truy cập
- Block scope (khối): khai báo trong cặp ngoặc nhọn
var: không bị giới hạn bởi cặp ngoặc nhọn
let/const: bị giới hạn bởi cặp ngoặc nhọn. Ra ngoại bị undefined
- Function scope (hàm): biến khái báo trong một hàm
cả let/var/const ra ngoài hàm đều bị undefined
- Toàn cục (global): biến khai báo ở một dòng code tự do, không nằm trong khối hay hàm

- break & continue
Break dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức
continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo


- Câu điều kiện
if...else: thực thi code khác nhau cho trường hợp true và false
if...else if: kiểm tra nhiều điều kiện theo thứ tự
ternary operator (toán tử điều kiện): cách viết ngắn gọn cho if...else đơn giản

- Vòng lặp nâng cao
for..in Loop: dùng để duyệt qua các thuộc tính của 1 object
forEach Method: method của array để thực thi 1 function cho mỗi phần tử. Không thể dùng break hoặc continue

- utils function: các hàm có sẵn của javascript, giúp code trở nên nhanh gọn hơn

- Các loại thao tác xử lý chuỗi: 
    - bỏ khoảng trắng
    trim(): bỏ khoảng trắng 2 đầu
    trimStart(): bỏ khoảng trắng bên trái
    trimEnd(): bỏ khoảng trắng bên phải
    - chuyển đổi chữ hoa -> chữ thường và ngược lại
    toUpperCase()
    toLowerCase()
    - kiểm tra chuỗi có bao gồm chuỗi con không
    includes()
    - tách chuỗi thành các phần
    split()
    - thay thế kí tự trong chuỗi
    replace()

- Các thao tác với mảng:
    - thêm phần tử vào mảng (push, unshift, splice)
        - push: thêm vào cuối
        - unshift: thêm vào đầu
        - splice: thêm vào giữa -> splice(<vị trí>, <số phần tử cần xóa>, <số phần từ cần thêm vào>)
    - xóa phần tử khỏi mảng (pop, shift, splice)
        - pop: xóa ở cuối
        - shift(): xóa ở đầu
        - splice(): xóa ở vị trí bất kì -> splice(<vị trí>,<số phần tử cần xóa>)
    - tìm kiểm (find, filter)
        - find: trả về phần tử đầu tiên hợp lệ
        - filter(): trả về tất cả các phần tử hợp lệ
    - biến đổi mảng (map)
        - map(): tạo mảng mới bằng cách áp dụng 1 hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài
    - sắp xếp mảng (sort)
        - sort((a,b) => a-b): 
            - so sánh từng cặp phần tử a và b
            - trả về số âm: a đứng trước b
            - trả về số dương: b đứng trước a
            - trả về 0: giữ nguyên thứ tự