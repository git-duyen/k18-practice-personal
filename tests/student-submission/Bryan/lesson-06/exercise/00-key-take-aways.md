# Git & Javascript (advance)
## Git
### Remote
git remote add <tên_remote> <url>
Trong đó:
* `<tên_remote>`: tên gợi nhớ để gọi lại remote đó (mặc định khi clone là `origin`, có thể đặt tên khác tùy ý, ví dụ `personal`)
* `<url>`: đường dẫn tới repository từ xa
### Clone
Là hành động lấy code từ một repo có sẵn về máy tính cá nhân.
Lệnh clone: git clone <link_repo>
Đặt lại tên thư mục clone: git clone <link_repo> <tên_mới>
**Nên clone bằng SSH**, vì khi clone bằng HTTPS, mỗi lần pull/push code phải nhập lại mật khẩu.
### Branch
Tạo branch mới (không chuyển sang): git branch <branch_name>
Chuyển sang branch đã tồn tại: git checkout <branch_name>
Tạo branch mới và chuyển sang ngay lập tức: git checkout -b <branch_name>
### Push
Push = đưa code từ vùng repository local lên server.
Lệnh push: git push <remote_name> <branch_name>
Ví dụ: git push origin main
Push branch mới lên remote (lần đầu tiên): git push origin <branch_name>
### Pull
git pull <remote_name> <branch_name>
Kéo dữ liệu mới từ remote về và merge vào branch hiện tại.
### Stashing
Stash là hành động lưu trữ tạm thời các thay đổi hiện tại (đã track, chưa commit) vào một vùng nhớ riêng, giúp working directory trở về trạng thái sạch để chuyển việc khác.
Lưu stash: git stash
Lưu stash và đặt tên: git stash save "tên_stash"
Lưu stash bao gồm cả file untracked files — tức file mới tạo nhưng chưa `git add`): git stash -u
Xem danh sách các bản lưu của stash: git stash list
Lấy lại công việc đã lưu (và xóa khỏi danh sách stash): git stash pop
## Javascript / TypeScript: Class
### Class là gì?
* Dùng để khai báo kiểu dữ liệu (một khuôn mẫu/blueprint)
* Là một khuôn mẫu định nghĩa các property và method mà các instance thuộc class đó sẽ có
### Ví dụ — JavaScript thuần
// class Student - đặt tên class theo PascalCase
class Student {
    // Thuộc tính / Property
    name;
    role;

    // Hàm khởi tạo / Constructor
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    // Phương thức / Method
    introduce() {
        console.log(`Hi, I'm ${this.name}, role: ${this.role}`);
    }
}

// Tạo object (instance) từ class
const student1 = new Student("Bryan", "Frontend Dev");
student1.introduce();
### Ví dụ — TypeScript (có khai báo kiểu dữ liệu)
class Student {
    name: string;
    role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, role: ${this.role}`);
    }
}
const student1 = new Student("Bryan", "Frontend Dev");
student1.introduce();
