//1
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

//2
console.log(sum);

for (let i = 2; i <= 9; i++) {
    console.log("Bảng cửu chương " + i);

    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}

//3
let arr = [];

for (let i = 1; i <= 99; i += 2) {
    arr.push(i);
}

console.log(arr);

//4
let username = "user";

for (let i = 1; i <= 10; i++) {
    console.log(username + i + "@example");
}

//5
let revenues = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 150 },
    { month: 4, total: 300 },
    { month: 5, total: 250 },
    { month: 6, total: 400 },
    { month: 7, total: 350 },
    { month: 8, total: 500 },
    { month: 9, total: 450 },
    { month: 10, total: 600 },
    { month: 11, total: 550 },
    { month: 12, total: 700 }
];

let sum02 = 0; 

for (let i = 0; i < revenues.length; i++) {
    sum += revenues[i].total;
}
console.log("Tổng doanh thu:", sum);