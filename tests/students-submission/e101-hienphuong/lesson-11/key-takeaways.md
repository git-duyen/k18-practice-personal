# Lesson 11
## Agenda
1. API là gì?
2. API với Postman
3. API với Typescript
---
## API là gì?
Viết tắt của Application Programming Interface - Bộ quy tắc giúp phần mềm giao tiếp với nhau


## API giải quyết bài toán gì?
Ví dụ:
- **Ứng dụng thời tiết** trên điện thoại dùng API để lấy dữ liệu thời tiết từ server
- Website thanh toán dùng API của ngân hàng để xử lý giao dịch
- Ứng dụng đặt xe dùng API Google Maps để hiển thị bản đồ

API giống như **cầu nối** hoặc **hợp đồng** giúp các hệ thống khác nhau làm việc cùng nhau mà không cần biết chi tiết bên trong của nhau.


## Tại sao cần test API
- **Đảm bảo hoạt động đúng** - API trả về dữ liệu chính xác, xử lý logic đúng như thiết kế
- **Phát hiện lỗi sớm** - Bắt bug trước khi ảnh hưởng đến frontend hoặc end user.
- **Kiểm tra bảo mật** - đảm bảo API không bị truy cập trái phép, không lộ dữ liệu nhạy cảm.
- **Kiểm tra hiệu năng** - API phản hồi đủ nhanh, chịu tải được nhiều request cùng lúc.
- **Tránh phụ thuộc** - Frontend/mobile có thể test độc lập, không cần đợi giao diện hoàn thành.
- **Dễ bảo trì** - Khi sửa code, chạy lại test để chắc chắn không làm hỏng tính năng cũ.

## Các thành phần của API
**Endpoint URL** - Địa chỉ để truy cập tài nguyên

**HTTP Method** - Phương thức thao tác
- GET (lấy dữ liệu)
- POST (tạo mới)
- PUT/PATCH (update dữ liệu)
- DELETE (xóa dữ liệu)
- HEAD
- OPTIONS

**Request** - yêu cầu gửi đi gồm:
- **Headers**: thông tin bổ sung (token xác thực, content-type,...)
- **Parameters**: Tham số trên URL (query param)
- **Body**: dữ liệu gửi lên (JSON, XML,..)

**Response** - phản hồi trả về gồm
- **Status code**: Mã trạng thái (200 OK, 404 Not found, 500 Error...)
- **Headers**: thông tin phản hồi
- **Body**: dữ liệu trả về (thường là JSON)

**API document** - tài liệu hướng dẫn dùng API:
- Thường bao gồm chi tiết:
    - Thông tin về endpoint, HTTP Method, URL, body,...
- Phổ biến: dùng swagger

## Định dạng dữ liệu dùng trong API: JSON
**JSON (Javascript object notation)**
- Định dạng dữ liệu phổ biến nhất để trao đổi thông tin giữa client và server
- Đặc điểm:
    - Dễ đọc, dễ viết cho cả người và máy
    - Nhẹ, truyền tải nhanh
    - Hỗ trợ hầu hết mọi ngôn ngữ lập trình
- **Object** - cặp key-value trong dấu {}
```JSON
{
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}
```
- **key** luôn có kiểu string
    - Các key không được trùng nhau
- **value** một trong các kiểu dữ liệu
    - string: "text"
    - number: 123
    - boolean: true|false
    - null: null
    - object: {}
    - array: []
- Lưu ý: Key phải để trong dấu ngoặc kép, không có dấu phẩy ở phần tử cuối
- Tip: JSON gần giống với object trong Javascript

## Gọi API
**Gọi API** = request tới API với các thông tin cần thiết để lấy về kết quả

Có nhiều cách gọi API:
- Command line: cURL
- Có giao diện: postman
- Automation: playwright, RestAssured, JMeter

## API với Postman - Giao diện
**Sidebar (bên trái)**
- **Collections**: Tổ chức các API request thành nhóm
- **Environments**: Quản lý các biến môi trường (dev, staging, production)
- **History**: Lịch sử các request đã gửi
- **Mock server**: Tạo server giả lập
- **Monitors**: Theo dõi API tự động

**Main Workspace (ở giữa)**
- Nơi làm việc chính để tạo và test API

**Right sidebar (bên phải)**
- Documentation
- Comments
- Code snippets

## API với Playwright
Sử dụng **request** fixture để gọi API
- Gọi các API mà không cần thực hiện các thao tác thông qua trình duyệt
- Thực hiện các thao tác gọi API trực tiếp trong code

Cú pháp
```typescript
test("name", async ({ request }) => {
    //code here
});

// Ví dụ
const baseURL = "https://material.playwrightvn.com/api/todo-app/v1";
    
// Login -> token
const response = await request.post(`${baseURL}/todos.php`);
const responseText = await response.text();
const responseJSON = await response.json();
```

-> Lấy kết quả, gán vào biến response
- response text: lấy ở dạng string
- response json: lấy ở dạng object

-> Thường lấy ở dạng object để thực hiện kiểm tra sau này

**Kiểm tra**:
- status trả về 200
- response có 7 phần tử

```typescript
const response = await request.get(baseURL + "/todos.php");
expect(response.status()).toBe(200);

const responseJSON = await response.json();
expect(responseJSON.todos.length).toBe(7);
```

## Luồng Authentication
Đối với các luồng cần authentication: 2 bước
1. Đăng nhập với thông tin username, password -> API trả ra token
2. Sử dụng token trong header để gọi các API phía sau

Ví dụ:
- Gọi API /login -> trả về token abc..fd8
- Gọi API /update_user, đính kèm token abc..fd8 ở bước 1 vào header (nếu không có header này sẽ gặp lỗi)

