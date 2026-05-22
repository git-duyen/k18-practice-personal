/* 1. Tính tổng các số lẻ từ 1 đến 100 */
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


/* 2. In bảng cửu chương từ 2 đến 9 */
for(let i = 2; i <= 9; i++) {
    for(let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + i * j);
    }
}

/* 3. Tạo 1 mảng chứa các số lẻ từ 1 đến 99 */
const arr = [];

for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}

console.log(arr);

/* 4. In ra 10 email dựa trên tên và stt */
for (let i = 1; i <= 10; i++) {
    console.log("email" + i + "@example.com");
}

/* 5. Tính tổng doanh thu 12 tháng */

let revenues = [];
let revenue = 100;
let total = 0;

for (let month = 1; month <= 12; month++) {
    let randomRevenue = Math.floor(Math.random() * 800) + 100; // ✅ trong vòng lặp
    revenue += randomRevenue;
    revenues.push(revenue); // ✅ push vào mảng revenues
    total += revenue;
    console.log(`Tháng ${month}: ${revenue}`);
}

console.log(revenues);
console.log(total);
