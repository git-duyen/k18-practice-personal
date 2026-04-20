# POM cho API
- Thuộc tính: request
- Phương thức: endpoint

Đặt tên:
- Pom api api.page.ts
- Pom UI page.ts

Pom style:
- Style 1: extends
```
	const todoPage = new TodoPage();
	todoPage.gotoTodoPage();
	todoPage.addTodo();
```

- Style 2: pom manager: 
```
	const pomManager = new PomManager();
	const homePage = pomManager.get('home_page');
	const todoPage = pomManager.get('todo_page');
	homePage.gotoTodoPage();
	todoPage.addTodo();
	--> không cần thiết cho TS
	
	getLoginPage(){
		return new LoginPage(this.page);
	}
	
	getDashboardPage(){
		return new DashboardPage(this.page);
	}
```

- Style 3: return other page:
```
    const homePage = new HomePage();
	const todoPage = homePage.gotoTodoPage();
	
	todoPage.addTodo()
```
# Async, Await
- Async/Await xử lý các tác vụ bất đồng bộ
	+ Async: đặt trước function để biến nó thành async function (trả về Promise)
	+ Await: đặt trước Promise để chờ nó hoàn thành trước khi chạy tiếp. 
- Luôn dùng await với:
	+ page.goto()
	+ page.click()
	+ page.fill()
	+ page.waitForSelector()
	+ expect() assertion
	+ Bất kỳ module nào trả về Promise
- Không cần await khi:
	+ page.locator: chỉ tạo locator chứ chưa tương tác
	+ Biến thông thường
	+ Synchronous operations (cộng chuỗi, tính toán..)
	
	
	
