# API
- Application Programming Interface
- Bộ quy tắc giúp phần mềm giao tiếp với nhau

- trả về dữ liệu chính xác, xử lý logic đúng như thiết kế
- Đảm bảo hoạt động đúng
- Phát hiện lỗi sớm
- Kiểm tra bảo mật
- Kiểm tra hiệu năng
- Tránh phụ thuộc
- Dễ bảo trì

## Thành phần của API
- Endpoint (URL): Địa chỉ để truy cập tài nguyên
- HTTP Method: Phương thức thao tác
    GET - lấy dữ liệu
    POST - tạo mới
    PUT/PATCH - cập nhật
    DELETE - xóa
- Request: Yêu cầu gửi đi
    Header - Thông tin bổ sung (token, xác thực, content-type,...)
    Parameters - Tham số trên URL
    Body - Dữ liệu gửi lên (json, xml,...)
- Response: Phản hồi trả về
    Status code - Mã trạng thái
    Headers - Thông tin phản hồi
    Body - Dữ liệu trả về (json)

## Định dạng dữ liệu dùng trong API : JSON
- JSON: Định dạng dữ liệu phổ biến nhất để trao đổi thông tin giữa client và server

### Cấu trúc cơ bản của JSON
- Object: cặp key-value trong dấu {}
    key: luôn có kiểu string (các key không được trùng nhau)
    value: một trong các kiểu dữ liệu (String/Number/Boolean/Null/Object/Array)

{
    "key1" : "value1",
    "key2" : "value2",
    "key3" : "value3"
}

## Gọi API
- Request tới API với các thông tin cần thiết để lấy về kết quả
