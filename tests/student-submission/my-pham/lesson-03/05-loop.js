// Câu 1:
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Tong tu 1 den 100 la: ${sum}`);

// Câu 2:

for (let i = 2; i <= 9; i++) {
    console.log(`Bang nhan ${i}:`)
    for (let x = 1; x <= 10; x++) {
        let tich = i * x;
        console.log(`${i} * ${x} = ${tich}`);
    }
}

// Câu 3:
let arr = [];
for (let i = 1; i < 100; i += 2) {
    arr.push(i);
};
console.log(`Mang chua cac so le la: ${arr}`);

// Câu 4: 
let arr2 = [];
for (let i = 1; i <= 10; i++) {
    arr2.push(i);
};
for (let x = 0; x < arr2.length; x++) {
    console.log(`User${arr2[x]}@example.com`);
};

// Câu 5:
let arr3 =[];
let sum3 = 0;
for (let i=1; i<=12; i++){
    let doanhThuThang ={
        month: i,
        total: i+100
    }
    arr3.push(doanhThuThang.total);
};

for (let i=0; i<arr3.length; i++){
    sum3 += arr3[i];
};
console.log(`Tong doanh thu 12 thang la: ${sum3}`);