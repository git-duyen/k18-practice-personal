# API
1. API là gì 
- Viết tắt của Application Programming Interface
- Bộ quy tắc giúp phần mềm giao tiếp với nhau 

2. Tại sao cần test API
- Đảm bảo hoạt động đúng 
- Phát hiện lỗi sớm 
- Kiểm tra bảo mật 
- Kiểm tra hiệu năng
- Tránh phụ thuộc 
- Dễ bảo trì

3. Các thành phần của API
- Endpoint(URL) - Địa chỉ để truy cập tài nguyên 
- HTTP Method - Phương thức thao tác
    + GET (lấy dữ liệu)
    + POST (tạo mới)
    + PUT/PATCH (cập nhật)
    + DELETE (xoá)
- Request - Yêu cầu gửi đi, gồm: 
    + Headers: Thông tin bổ sung (token xác thực, content-type, ...)
    + Parameters: Tham số trên URL ( query params)
    + Body: Dữ liệu gửi lên (JSON, XML ...)
- Response - Phản hồi trả về, gồm:
    + Status Code: Mã trạng thái (200, 404, 500, ...)
    + Headers: Thông tin phản hồi
    + Body: Dữ liệu trả về ( thường là JSON)
- API documentation - tài liệu hướng dẫn API:
    + Thường bao gồm chi tiết: 
        + Thông tin về Endpoint, HTTP method, URL, body, ...
    + Phổ biến: dùng swagger
4. Định dạng dữ liệu trong API 
- JSON
- Cấu trúc: 
> {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}

5. Gọi API 
- request tứi API với các thông tin cần thiết để lấy về kết quả 

6. API với Postman
- Sidebar ( Bên trái )
    + Collections: tổ chức các API request thành nhóm
    + Eveironments: quản lý các biến môi trường ( dev, stg, production)
    + History: Lịch sử các request đã gửi 
    + Mock Servers: tạo server giả lập 
    + Monitors: Theo dõi API tự động 
- Main workspace ( Giữa)
- Right Sidebar
    + Documentation
    + Comments
    + Code snippets

#Playwright API testing
1. Tại sao 
- Sử dụng request fixture để thực hiện gọi API 
    + Gọi API mà không cần phải thực hiện thao tác thông qua trình duyệt 
    + Thực hiện các thao tác gọi API trực tiếp trong code 

2.Cú pháp
> request.get('link');

- response text: lấy ở dạng string
> const responseText = await response.text();

- response json: lấy ở dạng object
> const responseJSON = await response.json();

- Thường lấy ở dạng object để thực hiện kiểm tra sau này 

