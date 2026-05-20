# API

## API (Application Programming Interface) là gì:
Bộ quy tắc giúp phần mềm giao tiếp với nhau


## Thành phần API:
1. Endpoint (URL): địa chỉ để truy cập tài nguyên
2. HTTP Method: GET (lấy dữ liệu), POST (tạo mới), PUT/PATCH (cập nhật), DELETE (xóa)
3. 
Request - yêu cầu gửi đi, gồm:
    - Headers: thông tin bổ sung (token xác thực, content-type,...)
    - Parameters: tham số trên URL (query params)
    - Body: dữ liệu gửi lên (JSON, XML,...)
![alt text](image-3.png)

Response - phản hồi trả về, gồm:
    - Status code: mã trạng thái (200 OK, 404 not found, 500 error)
    - Headers: thông tin phản hồi
    - Body: dữ liệu trả về (thường là JSON)
    
## Giao diện Postman
### Sidebar (bên trái)
- Collections: tổ chức các API request thành nhóm
- Environments: quản lí biến môi trường (dev, staging, production)
- History: lịch sử các request đã gửi
- Mock servers: tạo server giả lập
- Monitors: theo dõi API tự động