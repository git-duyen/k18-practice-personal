Undo Git:
    - Chuyển từ staging -> working directory: git restore --staged <file name>
    - Chuyển từ Repository -> working directory: git reset HEAD~<số commit muốn back>

Git amend:
    - Sửa message commit: git commit --amend (:wq để lưu, :q! để không lưu)
    - Commit thiếu file: git add file_thieu
                 git commit --amend
*** Note: không được amend khi đã push remote

Nhánh:
    - Khi chạy khởi tạo repo (git init), nhánh mặc định được tạo ra
    - Khi khời tạo đặt nhanh mặc định là nhánh main:
    Git config --global init.defaultBranch main
    - Tạo nhánh mới nó sẽ copy toàn bộ nhánh hiện tại: file, commit, v.v…
    Git branch <tên nhánh mới>
    - Xem các nhánh hiện có: git branch
    - Di chuyển sang nhánh khác: git checkout <tên nhánh>
    - Tạo và di chuyển sang nhánh mới: git checkout -b <tên nhánh mới>
    - Đứng trên nhánh khác và xóa: git branch -D <tên nhánh>
    NOTE: luôn pull code trước khi tạo nhánh mới 
    - File .gitignore: file cấu hình chỉ định những file và thư mục không cần thiết nào sẽ không được Git theo dõi:
    + File tạm thời của hệ điều hành
    + Thư mục dependencies (node_modules, vendor)
    + File build và artifacts (dist, build, *.exe)
+ File cấu hình cá nhân (IDE setting, environment variables)
    + File nhạy cảm (API keys, password, certificates)
+ File log và database local
    
Convention:
    - snake_case: 
    - kebab-case: tên file, tên folder
    - camelCase: tên biến, tên hàm
    - PascalCase: tên class
    
Object:
    - Khai báo
    Const/let myInfor = {
        "name": "Hanh",
        'phoneNumber': "0123456789",
        address: "VL",
        class: {
            name: "Lop Piano",
            level: "beginner"
        }
    }
    
    --> key có thể không cần " ' nếu chỉ có 1 từ
    --> value có thể là string, number, boolean hoặc 1 object khác
    
    - Truy xuất 1 giá trị: 
    + Khi tên key không có dấu cách, symbol: console.log(myInfor.class.name);
    + Khi tên key có dấu cách, symbol: console.log(myInfor["class"]["name]);

    - Thay đổi const object:
    + Thay đổi bằng 1 object mới sẽ lỗi
        ví dụ: 
        const student = {
            name: "hanh", 
            age: 20
        }

        -> const student = {
            name: "ivy", 
            age: 24
        } //lỗi

    + Thay đổi giá trị từng thuộc tính thi không lỗi
        -> student.name = "ivy";
           student.age = 24;

    - Thêm thuộc tính vào object: Dùng dấu "." hoặc []
        ví dụ: 
        let dog = {
            name: "Black", 
            age: 2
        }
        -> dog.color = "grey";
        -> dog.["mother dog"] = "White";

    - Xóa thuộc tính object: Dùng hàm delete:
        ví dụ: delete dog.age;

Array:
    - Khai báo: const arr = [1, 2, 3];
    - In: console.log(arr[0]);
    - Độ dài: console.log(arr.length);

Function:
Function tinhDienTich (dai, rong){
    Const dienTich = dai*rong;
    Console.log(`Dien tich: ${dienTich}`);
}
