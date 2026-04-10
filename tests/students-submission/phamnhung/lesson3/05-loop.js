//bai tap 1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

//bai tap 3
const arr = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        arr.push(i);
    }
}
console.log(arr);

//bai tap 4

for (let i = 1; i <= 10; i++) {
    console.log('user' + i + '@gmail.com');
}

//bai tap 5
const revenue = [
    { month: '1', amount: 1000 },
    { month: '2', amount: 1500 },
    { month: '3', amount: 1200 },
    { month: '4', amount: 1800 },
    { month: '5', amount: 2000 },
    { month: '6', amount: 1700 },
    { month: '7', amount: 2200 },
    { month: '8', amount: 1900 },
    { month: '9', amount: 2100 },
    { month: '10', amount: 2300 },
    { month: '11', amount: 2500 },
    { month: '12', amount: 2400 }
];
let totalRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
    totalRevenue = totalRevenue + revenue[i].amount;
}
console.log(totalRevenue);

//bai tap 2
for (let i = 2; i <= 9; i++) {
    console.log('===== Bang cuu chuong ' + i + '=====');
    for (let j = 1; j <= 10; j++) {
        console.log(i + ' x ' + j + ' = ' + (i * j));
    }
}
