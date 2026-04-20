//1.
let sum = 0;
for (let i = 1; i < 101; i++) {
    sum = sum + i;
}
console.log(sum);
//2
for (let i = 1; i < 10; i++) {
    let x = i;
    for (let j = 1; j < 11; j++) {
        let y = j;
        console.log(`${x} x ${y} = ${x * y}`)
    }
};
//3
let oddArray = [];
for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        oddArray.push(i);
    }
};
console.log(oddArray);
//4
let users = ['an', 'binh', 'chi', 'dung', 'ha', 'hieu', 'hung', 'lan', 'minh', 'nam'];
for (let i = 0; i < users.length; i++) {
    console.log(`${users[i]}${i + 1}@example.com`)
};
//5

const revenues = [
    { month: 1, total: 120 },
    { month: 2, total: 150 },
    { month: 3, total: 180 },
    { month: 4, total: 200 },
    { month: 5, total: 170 },
    { month: 6, total: 160 },
    { month: 7, total: 210 },
    { month: 8, total: 190 },
    { month: 9, total: 220 },
    { month: 10, total: 250 },
    { month: 11, total: 230 },
    { month: 12, total: 260 }
];
let totalRevenue = 0;
for (let i = 0; i < revenues.length; i++) {
    totalRevenue = totalRevenue + revenues[i].total;
};
console.log(totalRevenue);
