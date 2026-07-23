// Cau 1
let a = 0;
for (let i = 0; i <= 100; i++) {
    a += i;
}
console.log(a);

// Cau 2
const bangCuuChuong = [];

for (let i = 2; i <= 9; i++) {
    const table = [];

    for (let j = 1; j <= 10; j++) {
        table.push(`${i} x ${j} = ${i * j}`);
    }

    bangCuuChuong.push(table);
}

console.log(bangCuuChuong);

// Cau 3
const oddNumbers = [];

for (let i = 1; i <= 99; i += 2) {
    oddNumbers.push(i);
}

console.log(oddNumbers);

// Cau 4
const Name = "user";
const email = "@example.com";
for (let i = 1; i <= 10; i++) {
    const fullEmail = Name + i + email;
    console.log(fullEmail);
}

// Cau 5
const doanhThu =[
    {
        month: 1,
        total: 100
    },
    {
        month: 2,
        total: 200
    },
    {
        month: 3,
        total: 300
    },
    {
        month: 4,
        total: 400
    },
    {
        month: 5,
        total: 500
    },
    {
        month: 6,
        total: 600
    },
    {
        month: 7,
        total: 700
    },
    {
        month: 8,
        total: 800
    },
    {
        month: 9,
        total: 900
    },
    {
        month: 10,
        total: 1000
    },
    {
        month: 11,
        total: 1100
    },
    {
        month: 12,
        total: 1200
    }
]

let tongDoanhThu = 0;

for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu += doanhThu[i].total;
}

console.log(tongDoanhThu);

