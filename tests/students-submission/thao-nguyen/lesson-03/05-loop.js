const { monitorEventLoopDelay } = require("perf_hooks");

//tính tổng 1 to 100
let sum = 0
for (let i =1; i <=100; i++){
    sum += i;
}
console.log (sum);
//in bảng cửu chương 2 đến 9
for (let i =2; i <=9; i++){
    console.log(`Bảng cửu chương ${i}:`);
    for (let j =1; j <=10; j++){
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
//Tạo mảng chứa số lẻ từ 1 tới 99
let oddNumbers = [];
for (let i =1; i <100; i +=2){
    oddNumbers.push(i);
}  
console.log(oddNumbers);
//In ra 10 email theo thứ tự
let emails = [];
for (let i =1; i <=10; i++){
    emails.push(`email${i}@gmail.com`);
}
console.log(emails);
//Tính tổng doanh thu tháng 12
let doanhThu = [
    {month :1, total :100},
    {month :2, total :150},
    {month :3, total :200},
    {month :4, total :250},
    {month :5, total :300},
    {month :6, total :350},
    {month :7, total :400},
    {month :8, total :450},
    {month :9, total :500},
    {month :10, total :550},
    {month :11, total :600},
    {month :12, total :700},
];
let totalDoanhthu=0;
for (let item of doanhThu){
    totalDoanhthu += item.total;
}
console.log(totalDoanhthu);
