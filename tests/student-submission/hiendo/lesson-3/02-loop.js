/* 1. Tính tổng từ 1 đến 100. */

let n = 100;
const sum = (n * (n + 1)) / 2;
console.log("Tổng từ 1 đến 100 là", sum)

/* 2. In bảng cửu chương từ 2 đến 9. */

for (i = 2; i <= 9; i++) {
    console.log("Bảng cửu chương", `${i}`, "là")
    for (j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

/* 3. Tạo một mảng chứa các số lẻ từ 1 đến 99. */

const result3 = [];
for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0)
        result3.push(i);
}
console.log(result3);

/* 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
user1@example.com, user2@example.com, ..., user10@example.com). */

for (i = 1; i <= 10; i++) {
    console.log("user" + `${i}` + "@example.com")
}

/* 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100} */

const revenue =
    [
        { "month": 1, "total": 120 },
        { "month": 2, "total": 100 },
        { "month": 3, "total": 150 },
        { "month": 4, "total": 90 },
        { "month": 5, "total": 200 },
        { "month": 6, "total": 170 },
        { "month": 7, "total": 130 },
        { "month": 8, "total": 180 },
        { "month": 9, "total": 110 },
        { "month": 10, "total": 160 },
        { "month": 11, "total": 140 },
        { "month": 12, "total": 190 }
    ]
let sumRevenue = 0;
for (i = 0; i < revenue.length; i++) {
    sumRevenue += revenue[i].total;
}
console.log(sumRevenue);


