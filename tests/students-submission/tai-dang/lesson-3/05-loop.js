//1. 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum +=i;
}
console.log(sum);

//2.
for (let a = 2; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
        console.log(`${a} x ${b} = ${a * b}`);
    }
}


//3. 
let numbers = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        numbers.push(i);
    }
}
console.log(numbers);

//4. 
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

//5.
let totalRevenue = 0;
for (let month = 1; month <= 12; month++) {
    let revenue = {
        "month": month,
        "total": Math.floor(Math.random() * 1000) // Simulate random revenue for each month
    };
    totalRevenue += revenue.total;
}
console.log(`Total revenue for the year: ${totalRevenue}`);

