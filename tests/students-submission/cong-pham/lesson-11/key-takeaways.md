*** Test API
- Đảm bảo hoạt động đúng, trả về dữ liệu đúng và xử lý logic đúng với yêu cầu
- Phát hiện lỗi sớm, phát hiện ra bug trước khi bug xảy ra ở frontend hay sản phẩm tới người dùng
- Kiểm tra bảo mật, đảm bảo không bị truy cập trái phép và không lộ dữ liệu nhạy cảm
- Kiểm tra hiệu năng, đảm bảo tốc độ và phản hồi của API và chịu tải được từ nhiều request cùng lúc
- Tránh phụ thuộc và FE và BE, có thể test trước mà không cần giao diện hoàn thiện
- Dễ bảo trì, khi có cập nhật hay sửa code, có thể chạy lại để chắc chắn không làm ảnh hưởng đến tính năng cũ

*** API
- Thành phần API:
+ Endpoint (URL): Địa chỉ để truy cập tài nguyên
+ HTTP Method: Phương thức thao tác
> GET: Lấy dữ liệu
> POST: Tạo mới dữ liệu
> PUT: Cập nhật toàn bộ dữ liệu đè lên dữ liệu cũ
> PATCH: Cập nhật 1 phần dữ liệu được chỉ định
> DELETE: Xóa dữ liệu
+ Request: Yêu cầu gửi đi, bao gồm:
> Headers: Thông tin bổ sung (token xác thực, content-type,...)
> Parameters: Tham số trên URL (query params)
> Body: Dữ liệu gửi lên (JSON, XML,...)
+ Response: Phản hồi trả về, bao gồm:
> Status code: 200 OK, 404 Not Found, 500 Error,...
> Headers: Thông tin phản hồi
> Body: Dữ liệu trả về (thường là JSON)

- API documentation: Tài liệu hướng dẫn dùng API
- Định dạng dữ liệu API
+ JSON (JavaScript Object Notation): Định dạng dữ liệu phổ biến nhất để trao đổi thông tin giữa client và server
+ Object: cặp key - value trong {} || { "key1" : "value1", ...} . key luôn có kiểu string, không được trùng nhau . value là 1 trong các kiểu dữ liệu string, number, boolean, null, object, array . 
- Call API: dùng 1 trong số các cách cURL, Postman, Playwright,...