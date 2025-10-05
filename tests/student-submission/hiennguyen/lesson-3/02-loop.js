// Bai 1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
};

console.log(sum);


// // Bai 2
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    };
    console.log(` `);
};


// Bai 3
let oddNumbers = [];
for (let i = 1; i <= 99; i += 2) {
    oddNumbers.push(i);
};

console.log(`oddNumbers:`, oddNumbers);

// Bai 4
// Cach 1
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
};

// Cach 2
const users = [
    'user1@example.com',
    'user2@example.com',
    'user3@example.com',
    'user4@example.com',
    'user5@example.com',
    'user6@example.com',
    'user7@example.com',
    'user8@example.com',
    'user9@example.com',
    'user10@example.com'
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
};


// Bai 5
const revenues = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 999 },
    { "month": 3, "total": 200 },
    { "month": 4, "total": 123 },
    { "month": 5, "total": 400 },
    { "month": 6, "total": 80 },
    { "month": 7, "total": 500 },
    { "month": 8, "total": 700 },
    { "month": 9, "total": 200 },
    { "month": 10, "total": 100 },
    { "month": 11, "total": 50 },
    { "month": 12, "total": 600 },
];

let totalRevenue = 0;

for (let i = 0; i < revenues.length; i++) {
    totalRevenue += revenues[i].total;
}

console.log('Doanh thu 12 tháng là: ', totalRevenue);
