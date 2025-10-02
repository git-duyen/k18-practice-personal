/* 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với
2 cặp giá trị khác nhau. */

function multiply(a, b) {
    const result = a * b;
    return result;
}
console.log(multiply(10, 10), multiply(5, 6));

/* 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả
với 2 bộ số khác nhau. */

function findMin(a, b, c) {
    // if (a < b && a < c) return a;
    // if (b < c && b < a) return b;
    // if (c < a && c < b) return c;
    let min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    return min;
}
console.log(findMin(9, 20, 1), findMin(1, 6, 8));

/* 3. Viết hàm getTopStudents nhận 2 tham số:
● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
● threshold: ngưỡng điểm để được coi là "top" (số).
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả. */

function getTopStudents(students, threshold) {
    const result = [];
    for (i = 0; i < students.length; i++) {
        if (students[i].score >= threshold)
            result.push(students[i].name);
    }
    return result;
}
const students = [
    { name: "Hiền", score: 10 },
    { name: "Huy", score: 9.5 },
    { name: "Duy", score: 6 },
    { name: "Đạt", score: 9 }
]
console.log(getTopStudents(students, 8));

/* 4. Viết hàm calculateInterest nhận 3 tham số:
● principal: số tiền gửi ban đầu (số).
● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
● years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
in kết quả. */

function calculateInterest(principal, rate, years) {
    const total = principal + principal * rate * years/100;
    return total;
}
console.log(calculateInterest(10_000_000, 5, 2));