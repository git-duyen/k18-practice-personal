# API

## 1. API là gì?
**API (Application Programming Interface)** là giao diện cho phép các ứng dụng hoặc hệ thống **giao tiếp và trao đổi dữ liệu với nhau**.

Ví dụ:

```text
Client
   │
   │ HTTP Request
   ▼
   API
   │
   │ xử lý request
   ▼
Backend / Database
   │
   │ Response
   ▼
Client
```

#### 💡 Ví dụ thực tế

Khi đăng nhập:
```text
User nhập:
Username: admin
Password: 123456

        ↓

POST /api/login

        ↓

Backend kiểm tra thông tin

        ↓

Response:
{
  "token": "abc123",
  "message": "Login successfully"
}
```

*  👉 Frontend không trực tiếp truy cập database mà **gửi request đến API** để backend xử lý.

## 2. API với Postman
**Postman** là công cụ dùng để gửi request đến API và kiểm tra response.

#### 📌 Các thành phần thường kiểm tra
* HTTP Method
* URL / Endpoint
* Headers
* Query Parameters
* Request Body
* Response Status Code
* Response Body
* Response Headers

#### HTTP Methods thường dùng

| Method | Mục đích |
|:------:|----------|
| `GET` | Lấy dữ liệu |
| `POST` | Tạo dữ liệu |
| `PUT` | Cập nhật toàn bộ dữ liệu |
| `PATCH` | Cập nhật một phần dữ liệu |
| `DELETE` | Xóa dữ liệu |

#### 📌 Ví dụ API Login với Postman
**Request**
``` 
POST /api/login
```

**Body**
```json
{
  "username": "admin",
  "password": "123456"
}
```

**Response**
```json
{
  "token": "abc123",
  "message": "Login successfully"
}
```

#### ✅ Các điểm QA có thể kiểm tra
```text
Status Code
Response Body
Response Schema
Response Time
Headers
Error Message
Authentication
```
Ví dụ:
```text
Expected Status Code: 200

Expected message:
"Login successfully"
```

## 3. API với Playwright
Playwright không chỉ dùng để test UI mà còn hỗ trợ **API Testing** thông qua APIRequestContext.

#### 📌 Ví dụ GET API
```typescript
import { test, expect } from '@playwright/test';

test('GET user', async ({ request }) => {
  const response = await request.get('/api/users/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
});
```
#### 📌 Ví dụ POST API
```typescript
import { test, expect } from '@playwright/test';

test('Create user', async ({ request }) => {
  const response = await request.post('/api/users', {
    data: {
      name: 'Alex',
      email: 'alex@test.com'
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.name).toBe('Alex');
  expect(body.email).toBe('alex@test.com');
});
```

### API Testing trong Playwright
Một flow thường gặp:
```text
API
 │
 ├── GET
 ├── POST
 ├── PUT
 ├── PATCH
 └── DELETE
       │
       ▼
   Assertion
       │
       ├── Status Code
       ├── Response Body
       ├── Response Headers
       └── Response Time
```
---

## 🎯 Summary

| Khái niệm | Ý nghĩa |
|:---------:|---------|
| **API** | Giao diện giúp các hệ thống giao tiếp với nhau |
| **Endpoint** | Địa chỉ của API |
| **Request** | Yêu cầu gửi đến API |
| **Response** | Dữ liệu API trả về |
| **Postman** | Công cụ kiểm thử API |
| **Playwright API** | API testing bằng Playwright |
| **APIRequestContext** | Đối tượng dùng để gửi API request trong Playwright |
| **Assertion** | Kiểm tra kết quả API |