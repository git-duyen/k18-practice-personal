# 1. DOM relation
- Sefl: nốt hiện tại
- parent: cha - node phía trên trực tiếp của node hiện tại
- children: con - node phía dưới trực tiếp của node hiện tại
- ancestor: tổ tiên - node cha, ông, cụ,...
- descendant: hậu duệ - node con, cháu, chắt
- sibling: anh em - những node cùng cấp và cùng cha
- following: theo sau - những node phía bên tay phải của node hiện tại (không lấy những node con của node hiện tại)
- preceding: phía trước - các node ở phóa tay trái của node hiện tại (trừ các node ancestor)
- following-sibling: anh em phía sau
- preceding-sibling: anh em phía trước

# 2. XPath advance
- Wildcard: * - khớp tất cả
- child - con trực tiếp
- descendant - tất cả con cháu
- parent - tìm cha
- ancestor - tìm tổ tiên
- following-sibling - anh em phía sau
- preceding-sibling - anh em đứng trước
- following - tất cả node sau trong document
- ancestor-or-self - tổ tiên hoặc chính nó
- preceding - tất cả node trước trong document
- descendant-or-self - con cháu hoặc chính nó

# 3. Others
- AND: Tất cả điều kiện phải đúng
- OR: Một trong các điều kiện đúng
- text(): Lấy text bên trong element
- normalize-space(): Loại bỏ khoảng trắng trong text
- contains(): Kiểm tra chứa chuỗi con





