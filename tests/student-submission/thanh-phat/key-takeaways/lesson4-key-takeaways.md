### Java Script

1. Phạm vi của biến:
- Biến: Gồm có var, let, const. Sử dụng 2 biến let và const, không dùng var. Var không bị giới hạn bởi dấu ngoặc nhọn, nhưng let và const thì bị giới hạn
- Biến cục bộ: Được khai báo trong một hàm, cả var, const và let đều undefined nếu khai báo ngoài hàm
- Biến toàn cục: Được khai báo ngoài hàm và là code tự do

2. Break và Continue trong vòng lặp:
- Break dùng để thoát vòng lặp lập tức nếu thỏa điều kiện
- Continue dùng để bỏ phần còn lại của vòng lặp hiện tại và sang vòng lặp tiếp theo

3. If else:
- Dùng để thực thi code cho trường hợp true và false
- Toán tử rút gọn của if else: const status = age > 18 ? "Người lớn" : "Trẻ em"

4. Vòng lặp for in:
- Dùng để duyệt qua các thuộc tính của một object
- forEach dùng để duyệt trong mảng. forEach không thể dùng break và continue

5. Các hàm tiện ích của string:
- trim(): dùng để bỏ khoảng trống đầu và cuối trong chuỗi
- toUpperCase(): viết hoa tất cả ký tự trong chuỗi
- toLowerCase(): viết thường tất cả ký tự trong chuỗi
- includes(): kiểm tra chuỗi có chứa chuỗi con không
- split(): dùng để cắt chuỗi và đưa vào mảng
- replace(): dùng để thay thế chuỗi con bằng chuỗi khác

6. Mảng:
- push(): thêm vào cuối chuỗi
- unshift(): thêm vào đầu chuỗi
- splice(): thêm vào hoặc xóa chuỗi. Ví dụ: arr.splice(2, 0, 1,6); -> thêm vào chuỗi, arr.splice(2, 1.6); -> thay thế index 2 bằng giá trị khác
- pop(): xóa phần tử ở cuối
- shift(): xóa phần tử ở đầu
- map(): tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới cùng độ dài
- sort(): sắp xếp mảng