# **Các kiến thực học ở bài 3**

## **I. Git basic**
- Các lệnh cần nhớ:
    - git restore --staged <file> : đưa file từ staging về working directory
    - git reset HEAD~<số commit>: đưa file từ repository về working directory
    - git branch <tên branch>: tạo 1 branch mới
    - git branch: liệt kê các branch (lưu ý branch phải có commit thì mới hiển thị)
    - git checkout <tên branch>: switch sang branch khác
    - git checkout -b <tên branch>: vừa tạo và vừa switch sang branch mới
    - git branch -D <tên branch>: xóa branch

***lưu ý: luôn pull code về trước khi tạo branch mới***

- file .gitingore: file cấu hình quan trọng, chỉ định những file và thư mục không được theo dõi bới Git

## **II. Javascripts basic**
- Convention khi đặt tên:
    - snake_case
    - kebab-case
    - camelCase
    - PascalCase
    - UPPER_CASE

- Trong lớp học này:
    - snake_case: tạm thời không dùng
    - kebab-case: tên file và folder
    - camelCase: tên biến và hàm
    - PascalCase: tên class

- Kiểu dữ liệu Object:
    - Cấu trúc:
    ```typescript
    const objectName={
        key1: value1,
        key2: value2,
        key3:{
            key1: value1,
            key2: value2
            ...
        }
        ...
    }
    ```
    - Các truy vấn phần tử trong object
    ```typescript
    objectName.key1;
    objectName.key3.key1;

- Kiểu dữ liệu Array
    - Khai báo
    ```typescript
    const arr=[3,7,9];
    ```
    - Truy vấn phần tử trong array
    ```typescript
    console.log(arr[0]);
    ```
    - Lấy độ dài của array
    ```typescript
    arr.length
    ```
