
//Bài tập 1
let number = 0;


for (let i = 0; i <= 100; i++) {
    number += i;
}

console.log(number);

//Bài tập 2

for (let  table = 2; table <= 9; table++) {
    console.log(`Bảng cửu chương của ${table}:`);

    for (let i = 1; i <= 10; i++) {
        const result = table * i;
        console.log(`${table} x ${i} = ${result}`);
    }
}

//Bài tập 3
let arr = [];
for (let i = 1; i <= 99; i++){
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(`Mảng các số lẻ từ 1 đến 99: ${arr}`);

//Bài tập 4
const email = [];

for (let i = 1; i <= 10; i++) {
    email.push(`user${i}@gmail.com`);
}
console.log(email);

//Bài tập 5
const doanhThu =[
    { month: 'January', total: 10000 },
    { month: 'February', total: 15000 },
    { month: 'March', total: 12000 },
    { month: 'April', total: 18000 },
    { month: 'May', total: 20000 },
    { month: 'June', total: 17000 },
    { month: 'July', total: 22000 },
    { month: 'August', total: 19000 },
    { month: 'September', total: 21000 },
    { month: 'October', total: 23000 },
    { month: 'November', total: 25000 },
    { month: 'December', total: 24000 }
]

let totalRevenue = 0;
for (let i = 0; i < doanhThu.length; i++) {
    totalRevenue += doanhThu[i].total;
}

console.log(`Tổng doanh thu trong năm: ${totalRevenue}`);
