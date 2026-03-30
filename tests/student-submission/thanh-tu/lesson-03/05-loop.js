//1. Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

//2. In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}`);
    for (let y = 1; y <= 10; y++) {
        console.log(`[${i}]x[${y}]=${i * y}`);
    }
}

//3. Tạo 1 mảng số lẻ từ 1 đến 99
let arr = [];
for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(arr);

//4. In ra 10 email dựa trên tên người dùng và số thứ tự
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

//5. Tính tổng doanh thu 12 tháng trong năm
let mangDoanhThu = [];
let doanhThu = 100;

for (let i = 1; i <= 12; i++) {
    mangDoanhThu.push({
        month: i,
        total: doanhThu,
    });
    doanhThu += 50;
}

console.log(mangDoanhThu);

let tongDoanhThu = 0;

for (let i = 0; i < mangDoanhThu.length; i++) {
    tongDoanhThu += mangDoanhThu[i].total;
}

console.log("Tổng doanh thu 12 tháng:", tongDoanhThu);
