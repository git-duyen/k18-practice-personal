
// Exercise 1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

// Exercise 2

for (let table = 2; table <= 9; table++) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${table} x ${i} = ${table * i}`);
    }
};

// Exercise 3

const arr = []
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
};
console.log(arr);

// Exercise 4

for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

// Exercise 5

const doanhThu = [
    { month: 1, total: 50 },
    { month: 2, total: 100 },
    { month: 3, total: 150 },
    { month: 4, total: 200 },
    { month: 5, total: 250 },
    { month: 6, total: 300 },
    { month: 7, total: 350 },
    { month: 8, total: 400 },
    { month: 9, total: 450 },
    { month: 10, total: 500 },
    { month: 11, total: 550 },
    { month: 12, total: 600 },
];
let totalDoanhThu = 0;
for (let i = 0; i < doanhThu.length; i++) {
    totalDoanhThu = totalDoanhThu + doanhThu[i].total;
}
console.log(totalDoanhThu);