//Bài 1 viết hàm multiply nhận 2 tham số a và b, in ra kế quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau
function multiply(a, b) {
    return (a * b);
}
console.log(multiply(15, 5));
console.log(multiply(4, 10));

//Bài 2: Viết hàm findMin nhận 3 tham số a, b,c trả về giá trị nhỏ nhất. 
// GỌi hàm và in kết quả với 2 bộ số khác nhau
function finMin(a, b, c) {
    if (a < b && a < c) return a;
    if (b < a && b < c) return b;
    if (c < a && c < b) return c;
}
console.log(finMin(3, 1, 7));
console.log(finMin(44, 119, 73));

//Bài 3: 
let student = [
    { name: "Van", score: 8 },
    { name: "Linh", score: 10 },
    { name: "Huy", score: 5 },
    { name: "Hạnh", score: 6 }
];
function getTopStudents(student, threshold) {
    for (i = 0; i <= 3; i++) {
        if (student[i].score >= threshold) {
            console.log(student[i]);
        }
    };
};
getTopStudents(student, 7);

// Bai 4: Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm
function calcualateInterest(principal, rate, years) {
    return total = principal + principal * rate * years / 100;
}
console.log(calcualateInterest(10_000_000, 5, 2));