### 1. API là gì
API - Application Programming Interface
Tại sao cần test API:
- Đảm bảo hoạt động đúng: API trả về dữ liệu chính xác, xử lý đúng logic
- Phát hiện lỗi sớm: Bắt bug trước khi ảnh hưởng đến FE hoặc end user
- Kiểm tra bảo mật: Đảm bảo API không bị truy cập trái phép, không lộ dữ liệu nhạy cảm
- Kiểm tra hiệu năng: API phản hồi đủ nhanh, chịu tải được nhiều request cùng lúc
- Tránh phụ thuộc: FE/ Mobile có thể test độc lập, không cần đợi giao diện hoàn thành
- Dễ bảo trì: Khi sửa code, chạy lại test để chắc chắn không làm hỏng tính năng cũ

### 2. Các thành phần của API
- Endpoint (URL): Địa chỉ để truy cập tài nguyên
- HTTP Method: Phương thức thao tác (GET, POST, PUT/ PATCH, DELETE)
- Request: yêu cầu gửi đi, gồm: 
    + Headers: Thông tin bổ sung (token xác thực, content-type...)
    + Parameters: Tham số trên URL (query params)
    + Body: Dữ liệu gửi lên (JSON, XML...)
- Response: Phản hồi trả về, gồm:
    + Status code
    + Headers: Thông tin phản hồi
    + Body: Dữ liệu trả về (thường là JSON)

- API documentation: Tài liệu hướng dẫn dùng API:
    + Thường bao gồm chi tiết: thông tin về endpoint, HTTP method, URL...
    + Phổ biến: Dùng swagger

### 3. Định dạng dữ liệu dùng trong API
JSON (JavaScript Object Notation): định dạng phổ biến nhất dùng để trao đổi thông tin giữa client và server
Đặc điểm:
- Dễ đọc, dễ viết cho cả người và máy
- Nhẹ, truyền tải nhanh
- Hỗ trợ hầu hết mọi ngôn ngữ lập trình

Cấu trúc cơ bản:
- Object: cặp key-value trong dấu {}
    + key: luôn có kiểu string, các key không được trùng nhau, phải để trong dấu ngoặc kép
    + value: 1 trong các kiểu dữ liệu (string, number, boolean, null, object, array)



