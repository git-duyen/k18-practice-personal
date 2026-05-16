// 1. Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1 đến 100: ", sum);

// 2. (nâng cao) In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log(`\nBảng cửu chương ${i}`);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j} `);
    }
}

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99
let sole = [];
for (let i = 1; i <= 99; i += 2) {
    sole.push(i);
}
console.log("Số lẻ từ 1 đến 99: ", sole);

/* 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
user1@example.com, user2@example.com ...,user10@example.com). */

let username = "user";
for (let i = 1; i<= 10; i++) {
    console.log (`${username}${i}@example.com`);
}

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. 
// Biết cấu trúc object của mảng doanh thu như sau: {"month" : 2, "total": 100}

let tong = 0;
const doanhthu = [
    { "month" : 1, "total": 100},
    { "month" : 2, "total": 150},
    { "month" : 3, "total": 200},
    { "month" : 4, "total": 250},
    { "month" : 5, "total": 300},
    { "month" : 6, "total": 350},
    { "month" : 7, "total": 400},
    { "month" : 8, "total": 450},
    { "month" : 9, "total": 500},
    { "month" : 10, "total": 550},
    { "month" : 11, "total": 600},
    { "month" : 12, "total": 650}
];

for (let i = 0; i < doanhthu.length; i++) {
  tong += doanhthu[i].total;
}

console.log("Tổng doanh thu:", tong);