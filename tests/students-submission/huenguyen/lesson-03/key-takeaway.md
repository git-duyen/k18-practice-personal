# 1. GIT
## 1.1 Undo action 
- git commit --amend: chỉnh sửa commit gần nhất, sẽ mở editor để tự chỉnh sửa
- git commit --amend -m"message": có tác dụng là thay đổi luôn message của commit gần nhất 
- git restore --staged <file>: restore 1 file cụ thể từ staging về wroking directory 
- git reset HEAD~1: dùng để reset 1 commit gần nhất
## 1.2 Braching model 
- git pull original main: lấy code từ server về 
- Git sử dụng Brach để tạo ra các phiên bản của code, tránh ảnh hưởng tới bản gốc 
- Git branch: Xem danh sách nhánh 
- Git branch <tên_branch>: tạo nhánh mới
- Git_checkout <tên_branch> : Chuyển sang nhánh mới 
- Git checkout -b <tên>: Vừa tạo, vừa chuyển sang nhánh moiwsi ( hay dùng cái này)
- Git branch -D <Tên nhánh>: xóa branch
- Gitignore: Giúp chỉ định những file và thư mực không được theo dõi bởi git
# 2. Javasript Basic
## 2.1 Logical operator 
- Convention = quy tắc 
- Snake_case: Trông giống con rắn, tất cả các chữ viết thường, cách nhau bởi dâu gạch đưới
- kebab-case: Trông giống que xiên hàn quốc, tất cả các chữu viết thường, cách nnhau bởi dấu gạch ngang 
- camelCase: Trông gioong con lạc đà, chữ đầu viết thường, các chữ sau viết hoa chữ đầu tiên 
- PascalCase: Tên của nhà toán học Pascal, tất cả các chữ cái đầu viết hoa 

## 2.2 Object and array 
### 2.2.1 Object
- Object là một trong những kiểu dữ liệu quan trọng nhất của javescript, dùng để lưu trữ dữ liệu key-value
 - Cú pháp: 
      
     Const/let <variable_name> = {

        key1: value1,
        key2: value2, 
     }

- Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc hằng số 
 
    ex: Let user = {
        "name: : "Alex", "age" : "10",  :emai": "nguyenthihue@gamil.com"
    }

### 2.2..2 Array : Mảng 
arr = [0,1,2,3,4]
- Tạo mảng: Khai báo, sử dụng
- Truy xuất mảng: 

   Độ dài mảng: length 

   Lấy phần tử theo index [1] [2]

## 2.3 Function : Hàm
- Là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc tính toán cụ thể
- Khai báo 

        function <nameFunction> () {
            //code
        }
        Parameter
        Return value
