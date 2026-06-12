# Nội dung bài học số 3

## Git

---

git init: để init 1 project xài git
git config user.name "" : dùng để khai báo username dùng cho git push lên repository
git config user.email "" : dùng để khai báo email dùng cho git push lên repository
git add <tên file>: dùng để add file vô staged
git add . : thêm tất cả untracked files vô staged
git log: để xem log của tất cả các commit
git restore --stage <tên file>; đưa ra khỏi staged và trở lại trạng thái modified 
git reset HEAD~1: Xóa commit cuối, nhưng giữ lại tất cả thay đổi ở working directory (chưa staged).
git commit: sẽ đưa vào trạng thái VIM, dùng i để insert message và dùng ESC :wq để thoát sau khi đã input đầy đủ
git commit -m "message": commit với message thay vì đưa vào VIM
git commit --amend: thay đổi commit mới nhất với những thay đổi trong project, đưa vào VIM, dùng i để insert message và dùng ESC :wq để thoát sau khi đã input đầy đủ
git commit --amend -m 'message': thay đổi commit mới nhất với những thay đổi trong project với inserted message trong command line


## JavaScript:

---

1. Object:
- Chứa theo dạng key và value, value có thể là number, string, boolean và có thể là array hoặc là nested object

object được hiển thị như:

const school = {
    class: "string",
    age: number,
    isOld: boolean
    classExperience: {
        class1: "string",
        class2: number
    },
    languages: ["english", "Vietnamese"]
}

2. array: Là dạng mảng chứa các giá trị, bắt đầu từ index 0

Ví dụ: numbers = [1, 4, 7];

3. Function: Là 1 hàm để thực thi một nhóm các câu lệnh

Ví dụ:

function kiemtraSoChanLe(nuber){
    if(nuber % 2 === 0) {
        return "So chan";
    } else {
        return "So le";
    }
}

4. Đặt tên:

Đặt tên file/folder kebab-cases
Đặt tên class PascalCase
Đặt tên biến camelCase