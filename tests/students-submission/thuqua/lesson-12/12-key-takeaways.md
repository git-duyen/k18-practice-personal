# POM cho API

## 1. POM cho API là gì?

POM cho API cũng áp dụng tư tưởng **Page Object Model**:

- Tách **API logic** ra khỏi **test case**
- Mỗi API hoặc nhóm API liên quan có thể được tổ chức thành một `class`
- Test chỉ gọi các `methods` của class thay vì viết trực tiếp request

#### Ví dụ

```typescript
import { APIRequestContext } from '@playwright/test';

export class UserAPI {
  constructor(private request: APIRequestContext) {}

  async getUser(id: number) {
    return await this.request.get(`/api/users/${id}`);
  }

  async createUser(name: string, email: string) {
    return await this.request.post('/api/users', {
      data: {
        name,
        email,
      },
    });
  }
}
```

**Test:**
```typescript
import { test, expect } from '@playwright/test';
import { UserAPI } from './user-api';

test('Get user', async ({ request }) => {
  const userAPI = new UserAPI(request);

  const response = await userAPI.getUser(1);

  expect(response.status()).toBe(200);
});
```

## 2. POM Styles

Có nhiều cách tổ chức POM

#### 🔹 Style 1: Một class cho một Page / API
```
pages/
├── login-page.ts
├── home-page.ts
└── profile-page.ts
```

API:
```
api/
├── user-api.ts
├── auth-api.ts
└── product-api.ts
```
#### 🔹 Style 2: Base Class

Tạo một class dùng chung cho nhiều Page / API.
```typescript
class BaseAPI {
  constructor(
    protected request: APIRequestContext
  ) {}

  async get(url: string) {
    return await this.request.get(url);
  }
}
```
Các API khác kế thừa:
```typescript
class UserAPI extends BaseAPI {
  async getUser(id: number) {
    return await this.get(`/api/users/${id}`);
  }
}
```
## 3. Một số biến thể của POM

POM không có một cấu trúc duy nhất.

Một số biến thể thường gặp:

#### Page Object
```
LoginPage
    ├── usernameInput
    ├── passwordInput
    └── login()
```

#### Component Object
Dùng cho một component được sử dụng ở nhiều page.
```
Header
    ├── logo
    ├── menu
    └── logout()
```
#### API Object
Dùng để quản lý các API.
```
UserAPI
    ├── getUser()
    ├── createUser()
    ├── updateUser()
    └── deleteUser()
```

#### Base Object
Chứa logic dùng chung.
```
BasePage
BaseAPI
    ↓
Các class khác kế thừa
```
## 4. Async / Await
### async là gì?
`async` dùng để khai báo một function là **asynchronous function**.
```typescript
async function getUser() {
  // ...
}
```
Một `async function` luôn trả về một `Promise`.

### await là gì?
`await` dùng để **chờ một Promise hoàn thành** trước khi thực hiện câu lệnh tiếp theo.
```typescript
const response = await request.get('/api/users');
```
👉 Chờ API trả response rồi mới thực hiện câu lệnh tiếp theo.

## 5. Tại sao cần async / await?
Các thao tác như gọi API thường cần thời gian để hoàn thành.
Ví dụ:
```
Test
 ↓
Gửi API Request
 ↓
Chờ Server xử lý
 ↓
Nhận Response
 ↓
Assertion
```
**Nếu không chờ response mà thực hiện assertion ngay, có thể xảy ra lỗi vì dữ liệu chưa sẵn sàng.**

#### ❌ Không chờ đúng cách
```typescript
const response = request.get('/api/users');

expect(response.status()).toBe(200);
```
`request.get()` trả về `Promise`, không phải response trực tiếp.

#### ✅ Sử dụng await
```typescript
const response = await request.get('/api/users');

expect(response.status()).toBe(200);
```
👉 `await` giúp lấy kết quả thực tế của Promise.

## 6. Dùng Async / Await đúng cách

#### 1. Function có thao tác asynchronous → dùng `async`
```typescript
async function getUser() {
  // ...
}
```

#### 2. Dùng `await` trước Promise
```typescript
const response = await request.get('/api/users');
```

#### 3. Không dùng `await` một cách tùy tiện
❌ Không cần:
```typescript
const name = await 'Alex';
```
Vì `'Alex'` không phải Promise.

#### 4. Các thao tác cần chạy tuần tự
```typescript
const loginResponse = await login();

const userResponse = await getUser();

const updateResponse = await updateUser();
```

**Flow**:
```
login()
  ↓
getUser()
  ↓
updateUser()
```

#### 5. Các thao tác độc lập có thể chạy song song
Nếu các API không phụ thuộc nhau:
```typescript
const [users, products] = await Promise.all([
  getUsers(),
  getProducts(),
]);
```
**Flow:**
```
        ┌── getUsers()
Test ───┤
        └── getProducts()
                ↓
        Promise.all()
                ↓
             Result
```
👉 Có thể nhanh hơn so với chạy tuần tự.

---
### Summary

| Khái niệm | Ý nghĩa |
|:---------:|---------|
| **POM cho API** | Tách API logic khỏi test logic |
| **API Object** | Class quản lý một nhóm API |
| **Base Class** | Chứa logic dùng chung |
| **async** | Khai báo asynchronous function |
| **await** | Chờ Promise hoàn thành |
| **Promise** | Đại diện cho kết quả của một thao tác asynchronous |
| **Promise.all()** | Chờ nhiều Promise cùng lúc |
| **Async/Await** | Giúp viết asynchronous code dễ đọc và dễ quản lý hơn |
