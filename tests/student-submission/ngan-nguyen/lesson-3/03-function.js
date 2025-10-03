//Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
console.log("Function 1")
function multiply(a, b) {
    return a * b;
}
const m1 = multiply(3, 6);
const m2 = multiply(4, 9);
console.log(`m1: ${m1} \t m2: ${m2}`);
console.log("------------------------------------------------------");

//Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.
console.log("Function 2")
function findMin(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}
let min1 = findMin(3, 6, 8);
let min2 = findMin(5, 2, 9);
console.log(`min1: ${min1} \t min2: ${min2}`);
console.log("------------------------------------------------------");
/* Viết hàm getTopStudents nhận 2 tham số:
● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
● threshold: ngưỡng điểm để được coi là "top" (số).
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả.
*/
console.log("Function 3")
function getTopStudents(students, threshold) {
    let topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }
    return topStudents;
}
const students = [
    { name: "Ngân", score: 9 },
    { name: "Hoa", score: 5 },
    { name: "Thư", score: 7 },
    { name: "Mai", score: 8 },
    { name: "Tú", score: 6 }];
let threshold = 7;
let topStudent = getTopStudents(students, threshold);
console.log(`Danh sách học sinh đạt yêu cầu: ${topStudent}`);
console.log("------------------------------------------------------");

/* Viết hàm calculateInterest nhận 3 tham số:
● principal: số tiền gửi ban đầu (số).
● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
● years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
in kết quả.
*/

console.log("Function 4")
function calculateInterest(principal, rate, years) {
    const total = principal + principal * rate * years / 100;
    return total;

}
const totalInterest = calculateInterest(100_000_000, 6, 5)
console.log(`Tổng số tiền sau 5 năm: ${totalInterest}`);
console.log("------------------------------------------------------");

