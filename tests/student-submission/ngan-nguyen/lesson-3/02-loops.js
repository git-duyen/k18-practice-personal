//Tính tổng từ 1 đến 100.
console.log("Loop 1")
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(`Tổng từ 1 đến 100 bằng: ${sum}`);
console.log("------------------------------------------------------");
// In bảng cửu chương từ 2 đến 9.
console.log("Loop 2")
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j} \n`);
    }
}
console.log("------------------------------------------------------");
// Tạo một mảng chứa các số lẻ từ 1 đến 99.
console.log("Loop 3")
let arr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        arr.push(i);
    }
}
console.log(`Mảng chứa các số lẻ là: [${arr}]`);
console.log("------------------------------------------------------");
// In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
//user1@example.com, user2@example.com, ..., user10@example.com).
console.log("Loop 4")
let email = [];
for (let i = 1; i <= 10; i++) {
    email.push(i);
    console.log(`user${i}@example.com \t`);
}

console.log("------------------------------------------------------");
/* Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100}
*/
console.log("Loop 5")
const revenue = [
    { month: 1, total: 50 },
    { month: 2, total: 100 },
    { month: 3, total: 200 },
    { month: 4, total: 300 },
    { month: 5, total: 400 },
    { month: 6, total: 500 },
    { month: 7, total: 600 },
    { month: 8, total: 700 },
    { month: 9, total: 800 },
    { month: 10, total: 900 },
    { month: 11, total: 1000 },
    { month: 12, total: 1100 },
]
let totalRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
    totalRevenue += revenue[i].total
}
console.log(`Tổng doanh thu trong năm: ${totalRevenue}`);
console.log("------------------------------------------------------");
