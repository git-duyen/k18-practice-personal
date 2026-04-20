# Nội dung buổi học
## 1. Git
### 1.1. Undo commit
#### 1.1.1. Undo từ Staging về Working
|Trường hợp| Phạm vi| Lệnh | Kết quả |
|----------|--------|------|---------|
|Undo 01 file| 01 file |git restore --stagged 'file name'|File chuyển từ vùng Stagging về Working|
|Undo nhiều file| Nhiều file|git restore --stagged 'file 01' 'file 02'|File chuyển từ vùng Stagging về Working|
|Undo tất cả file|Tất cả các file đang ở staging|git restore --stagged .| Tất cả các file chuyển từ vùng Stagging về Working| 
#### 1.1.2. Undo từ Repository về Working
|Trường hợp| Phạm vi| Lệnh | Kết quả |
|----------|--------|------|---------|
|Undo N commit| N commit |git reset HEAD ~N|Reset N commit|

***Lưu ý: Commit đầu tiên sẽ không reset (undo) được. Muốn undo cần phải xoá folder git và chạy lệnh init lại***
### 1.2. Branching
|Lệnh|Ý nghĩa|
|---|---|
|git pull origin mainn| Lấy code về từ nhánh main|
|git branch|Lấy danh sách các nhánh đang có|
|git branch 'tên-nhánh'|tạo nhánh copy giống hệt nhánh đang đứng tại đó|
|git check -b 'tên_nhánh|Tạo nhánh copy nhánh hiện tại và chuyển sang nhánh copy|
|git checkout 'tên_nhánh'| Chuyển sang nhánh khác|
|git branch -D 'tên_nhánh'|Xoá nhánh. **Lưu ý: Phải đứng từ nhánh khác mới có thể xoá được**|
### 1.3. Ignore file
Khi muốn thông báo với git về những file không muốn theo dõi như: biến môi trường, lib, thông tin nhạy cảm,... hãy tạo file ***.gitignore** và thêm các file/folder muốn ignore vào file này


## 2. Javascript
### 2.1. Object
Object là một kiểu dữ liệu, lưu trữ dữ liệu dưới dạng một cặp **key: value**
Ví dụ
```javascript
const myFamily {
    number: 04,
    address: 'Nam Dinh',
    members: ['bo','me','contrai','congai'],
    assets: {
        car: 01,
        house: 'Tay ho''
    }
}
```
Cách lấy dữ liệu trong object: Object.tên key hoặc Object ['tên Key']
### 2.2. Function
Function là một đoạn code có thể được tái sử dụng
Ví dụ
```javascirpt
function counting (a,b) {
    code
    return
} -> Có parameter

hoặc 
Fucntion counting () {

} -> Không có parameter
```

### 2.3. Array
Array là một mảng 
Ví dụ 
```javascript
const myLuckyNumber = [1,4,6,7,8]
```
Cách truy xuất mảng: 
- Array.lenght - trả về độ dài mảng
- Array[vị trí] - trả về phần tử trong mảng