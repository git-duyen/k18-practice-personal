# API Testing

## API là gì?

API là viết tắt của **Application Programming Interface**

Là tập hợp các quy tắc giúp phần mềm **giao tiếp** với nhau.

API giống như **"cầu nối"** hoặc **"hợp đồng"** giúp các hệ thống khác
nhau làm việc với nhau mà không cần biết chi tiết bên trong của nhau.

------------------------------------------------------------------------

## Tại sao cần test API?

* Đảm bảo hoạt động đúng
* Phát hiện lỗi sớm
* Kiểm tra bảo mật
* Kiểm tra hiệu năng
* Tránh phụ thuộc

------------------------------------------------------------------------

## Các thành phần của API

* **Endpoint (URL)** - địa chỉ để truy cập tài nguyên
* **HTTP Method** - phương thức thao tác
    * GET (lấy dữ liệu)
    * POST (tạo mới)
    * PUT/PATCH (cập nhật)
    * DELETE (xóa)
* **Request** - yêu cầu gửi đi, gồm:
    * Headers: thông tin bổ sung (token, xác thực, content-type,...)
    * Parameters: tham số trên URL (**query params**)
    * Body: dữ liệu gửi lên (JSON, XML,...)
* **Response** - phản hồi trả về, gồm:
    * Status code: mã trạng thái (200 OK, 404 Not Found, 500
        Error...)
    * Headers: thông tin phản hồi
    * Body: dữ liệu trả về

------------------------------------------------------------------------

## API với Postman

Thực hành:
* Lấy danh sách TODO
* Tạo mới TODO
* Cập nhật TODO
* Cập nhật một phần: 
  *`description = lớp học hiện tại`
* Cập nhật toàn bộ:
  * `description = new + lớp học hiện tại`
  * `title = new + tên`
* Xóa TODO

------------------------------------------------------------------------

## API với Playwright

Sử dụng **request fixture** để thực hiện gọi API:

* Gọi API mà không cần thông qua trình duyệt
* Thực hiện các thao tác gọi API trực tiếp trong code

### Cú pháp

``` ts
request.get('link');

// VD:
const url = 'https://material.playwrightvn.com/api/todo-app/v1/todos.php';
request.get(url);
```

``` ts
// VD2:
const url = 'https://material.playwrightvn.com/api/todo-app/v1/todos.php';
const response = await request.get(url);

const responseText = await response.text();
const responseJSON = await response.json();
```

*   **response.text()**: lấy dữ liệu dạng string
*   **response.json()**: lấy dữ liệu dạng object

→ Thường dùng dạng object để tiện kiểm tra sau này

------------------------------------------------------------------------

## Assertions

Kiểm tra:

* Status code trả về 200

``` ts
const response = await request.get(url);
expect(response.status()).toBe(200);
```

* Response có 7 phần tử

``` ts
const responseJSON = await response.json();
expect(responseJSON.todos.length).toBe(7);
```
