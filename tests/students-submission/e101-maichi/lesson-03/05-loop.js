//Bài 1
let tong = 0;
for (let i = 1; i <= 100; i++) {
    tong += i;
} console.log(tong);

//Bài 2

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
//Bài 3
const arr = [];
for (let i = 1; i <= 99; i++) {
    if (i%2===1) {
            arr.push(i);

    }
}
console.log(arr);

//Bài 4
for ( let i = 1; i <= 10; i++) {
    console.log(`user${i}@gmail.com`);
}

//Bài 5
const tongDoanhThu = [
    { month: 1, total: 80 },
    { month: 2, total: 100 },
    { month: 3, total: 120 },
    { month: 4, total: 150 },
    { month: 5, total: 160 },
    { month: 6, total: 120 },
    { month: 7, total: 150 },
    { month: 8, total: 100 },
    { month: 9, total: 200 },
    { month: 10, total: 140 },
    { month: 11, total: 120 },
    { month: 12, total: 250 },
]
let sum = 0;
for (let i = 0; i < tongDoanhThu.length; i++) {
    sum += tongDoanhThu[i].total;
}
console.log("Tổng doanh thu:", sum);

