# Bài 11: API TESTING

## Phần 1: API là gì?
- API là viết tắt của **Application programming interface**: Bộ quy tắc giúp các phần mềm giao tiếp với nhau.
- API giống như cầu nối giúp các hệ thống khác nhau làm việc với nhau.
- Tại sao cần test API:
   - Đảm bảo hoạt động đúng: logic đúng, độ chính xác của dữ liệu
   - Phát hiện lỗi sớm
   - Kiểm tra bảo mật
   - Kiểm tra hiệu năng
   - Tránh phụ thuộc
   - Dễ bảo trì

- Các thành phần của API:
   - Endpoint
   - Method
   - Request: Header, parameters, body
   - Response: Status code, headers, body

## Phần 2: API với postman
## Phần 3: API với playwright
- Sử dụng request fixture để thực hiện gọi api:
   - Gọi api không cần thực hiện thao tác qua trình duyệt
   - Thao tác gọi api trực tiếp trong code
- Cú pháp:
```
test("name", ({request})=> {
   //code here
});
```
```
request.get("link");
```
Lấy kết quả gán vào biến response
```
const loginResponseJson = await loginResponse.json();
```
Kiểm tra kết quả trả về:
```
const response = await request.get(URL);
expect(response.status()).toBe(200);
```
### Luồng API
```
import {test} from '@playwright/test';

   test("Request method - POST", async ({request})=> {
      const baseURL = "https://material.playwrightvn.com/api/user-management/v1";

      //Login lay ra token
      const loginResponse = await request.post(`${baseURL}/login.php`, {
         data: {
            "email": "admin@example.com",
            "password": "password"
         }
      });

      const loginResponseJson = await loginResponse.json();
      const token = loginResponseJson.data.token;

      //Call api voi token o tren
      const userResponse = await request.get(`${baseURL}/users.php`,{
         headers: {
            Authorization : `Bearer ${token}`
         }
      });

      const userResponseJson = await userResponse.json();
      console.log(userResponseJson);
   });
```
