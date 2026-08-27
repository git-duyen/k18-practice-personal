# API

## 1.Khái niệm về API

- Application Programming Interface — Bộ quy tắc giúp phần mềm giao tiếp với nhau.
- API giống như "cầu nối" hoặc "hợp đồng" giúp các hệ thống khác nhau làm việc cùng nhau mà không cần biết chi tiết bên trong của nhau.

## 2.API Testing

- Đảm bảo hoạt động đúng - API trả về dữ liệu chính xác, xử lý logic đúng như thiết kế
- Phát hiện lỗi sớm - Bắt bug trước khi ảnh hưởng đến frontend hoặc người dùng cuối
- Kiểm tra bảo mật - Đảm bảo API không bị truy cập trái phép, không lộ dữ liệu nhạy cảm
- Kiểm tra hiệu năng - API phản hồi đủ nhanh, chịu tải được nhiều request cùng lúc
- Tránh phụ thuộc - Frontend/Mobile có thể test độc lập, không cần đợi giao diện hoàn thành

## 3.Các thành phần của API

- Endpoint (URL) - Địa chỉ để truy cập tài nguyên
- HTTP Method - Phương thức thao tác
  - GET (lấy dữ liệu)
  - POST (tạo mới)
  - PUT/PATCH (cập nhật)
  - DELETE (xóa)
- Request - Yêu cầu gửi đi, gồm:
  - Headers: Thông tin bổ sung (token xác thực, content-type...)
  - Parameters: Tham số trên URL (query params)
  - Body: Dữ liệu gửi lên (JSON, XML...)
- Response - Phản hồi trả về, gồm:
  - Status Code: Mã trạng thái (200 OK, 404 Not Found, 500 Error...)
  - Headers: Thông tin phản hồi
  - Body: Dữ liệu trả về (thường là JSON)

## 4.Định dạng dữ liệu dùng trong API

- JSON (JavaScript Object Notation):Định dạng dữ liệu phổ biến nhất để trao đổi thông tin giữa client và server.
- Đặc điểm:
  - Dễ đọc, dễ viết cho cả người và máy
  - Nhẹ, truyền tải nhanh
  - Hỗ trợ hầu hết mọi ngôn ngữ lập trình
- JSON: Cấu trúc cơ bản. Object - Cặp key-value trong dấu {}

# Playwright API Testing

- Gọi các API mà không cần phải thực hiện thao tác thông qua trình duyệt.
- Thực hiện các thao tác gọi API trực tiếp trong code.

  ```
    test("name", ({ request }) => {
    // code here
    })

  ```

  ```
  const url = 'https://material.playwrightvn.com/api/todo-app/v1/todos.php';
  const response = await request.get(url);

  ```

  ```
  const responseText = await response.text();
  const responseJSON = await response.json();
  response.text(): lấy ở dạng string
  response.text(): lấy ở dạng string

  ```

  ```

  const response = await request.get(URL);
  expect(response.status()).toBe(200);
  const responseJSON = await response.json();
  expect(responseJSON.todos.length).toBe(7);

  ```
