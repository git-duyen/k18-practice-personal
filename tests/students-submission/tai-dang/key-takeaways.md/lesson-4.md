1. Javascript (nâng cao)
   ○ Phạm vi của biến
        Phạm vi (scope) xác định nơi mà biến có thể truy cập
        JavaScript có ba loại phạm vi:
            • Block scope (khối)
            • Function scope (hàm)
            • Toàn cục (global)
   ○ break & continue
        1. break dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.

            // Thoát khi tìm thấy giá trị
            for (let i = 0; i < 10; i++) {
            if (i === 5) {
                break; // Thoát vòng lặp khi i = 5
                }
                console.log(i);
            }
            // Output: 0, 1, 2, 3, 4
        2. continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.
            // Bỏ qua số chẵn
            for (let i = 0; i < 10; i++) {
                if (i % 2 === 0) {
                    continue; // Bỏ qua số chẵn
                    }
                console.log(i);
            }
            // Output: 1, 3, 5, 7, 9
   ○ Vòng lặp nâng cao
   ○ Câu điều kiện nâng cao
   ○ Utils functions