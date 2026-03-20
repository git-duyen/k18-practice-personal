API: bộ quy tắc giúp các phần mềm giao tiếp với nhau
Test API để:
- Đảm bảo hoạt độn đúng --> dữ liệu đúng
- Phát hiện lỗi sớm
- Kiểm tra bảo mật
- Kiểm tra hiệu năng
- Tránh phụ thuộc UI
- Dễ bảo trì

Các thành phần API:
- Endpoint (URL): địa chỉ truy cập
	Schema + subdomain + domain + tên miền + path
- HTTP methods: xác định hành động client đối với server
- Request:
    + Headers: thông tin bổ sung: token, content-type
    + Param: tham số trên URL
    + Body: dữ liệu gửi lên 
- Response:
    + Status code
    + Header: thông tin phản hồi
    + Body: dữ liệu trả về

PW API testing: sử dụng request fixture: async ({ request }) => 
- Gọi API không cần thông qua browser
- Thực hiện gọi API trực tiếp trong code
```
import { test, expect, request } from '@playwright/test';

test('Get all todos', async ({ request }) => {
    const response = await request.get('https://material.playwrightvn.com/api/todo-app/v1/todos.php');
    const responseJson = await response.json();
    console.log(responseJson.todos.length);

    expect(response.status()).toBe(200);
})

test.describe("Full method", () => {
    let id;

    test("1. create todo", async ({ request }) => {
        const response = await request.post('https://material.playwrightvn.com/api/todo-app/v1/todo.php', {
            data: {
                title: 'Ngoc Hanh 2',
                description: 'Add description 1',
                status: 'pending',
                priority: 'high',
                due_date: "2026-03-18 00:00:00",
                user_id: 1
            }
        })
        const responseJson = await response.json();
        console.log(responseJson);
        id = responseJson.todo.id;
    })
    test("2. delete todo", async ({ request }) => {
        const response = await request.delete('https://material.playwrightvn.com/api/todo-app/v1/todo.php', {
            data: {
                id: id
            }
        })
        const responseJson = await response.json();
        console.log(responseJson);
    })
})
```

- Có thể lưu data trả về dưới 2 dạng:
	+ response text: thường dùng khi response trả về không phải json
		const responseText = await response.text();
		//nếu muốn chuyển qua json
		const responseJson = JSON.parse(responseText);
		
	+ response json: --> thường dùng
	
Assertion:
- status code:
	expect(response.status()).toBe(200);
		
- response có 7 phần tử:
	const responseJSON = await response.json();
	expect(responseJSON.todos.length).toBe(7);
		
Authentication: 
- 2 bước: 
	+ Đăng nhập với usn, pw -> API trả token
	+ Sử dụng token trong header cho các API phía sau
```
test('Authentication', async ({ request }) => {
    const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';

    //Log in --> token
    const loginResponse = await request.post(`${baseURL}/login.php`, {
        data: {
            "email": "admin@example.com",
            "password": "password"
        }
    })
    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.data.token;

    //Call API with token
    const userResponse = await request.get(`${baseURL}/users.php`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const userResponseJson = await userResponse.json();
    console.log(userResponseJson);

})
```
