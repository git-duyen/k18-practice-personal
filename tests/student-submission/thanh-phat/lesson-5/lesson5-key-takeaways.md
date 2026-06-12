### Java Script

1. Function expression:
- Định nghĩa function bằng cách gán cho nó một biến
Example: const minus = function(a,b){ return a - b };

2. Lambda function (arrow function):
Example: const minus = (a, b) => {
    return a - b;
}

- Nếu chỉ có 1 dòng code có thể rút ngắn. Example: const minus = (a, b) => a - b;
- Nếu không có tham số thì phải có dấu ngoặc tròn rỗng. Example: const getFloor = () => Math.floor();
- Có 1 tham số thì có thể bỏ dấu ngoặc. Example: const double = x => x * 2;

3. Anonymous function:
- Dùng để gán cho biến
Example: const anonymousFunc = function(){
    console.log("Hello World");
}

- Dùng để làm callback function

### Playwright

1. DOM: Là các cây element của 1 website
- Có thẻ mở và thẻ đóng
- Có thẻ mở và đóng cùng lúc
- Trong thẻ có thuộc tính, giá trị của thuộc tính và text

2. Selector: Tương tác với các phần tử trên trang web
- Có 3 loại select: Xpath,, CSS selector và Playwright selector
- Mức độ ưu tiên: Playwright Selector > CSS Selector > XPath

3. Playwright basic syntax:
- test: Dùng để khai báo một test
- step: Đơn vị nhỏ hơn test, dùng để khai báo 1 test case. Step phải được map 1-1 mới test case để dễ maintain

