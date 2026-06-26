const { getRandomValues } = require("node:crypto");

let sum = 0;
for (let i = 1 ; i <= 100; i++) 
    {
        sum = sum + i;
        console.log("tổng hiện tại là: ", sum);
    }
//////////////////////////////////////////////////////////// bai tap 2
for (let i = 1; i <10; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}   
//////////////////////////////////////////////////////////// bai tap 3
let array = [];
for (let i = 1; i < 100; i++) {
  if (i%2 !== 0) {
    array.push(i);
  }
}
console.log(`Các số lẻ từ 1 đến 100 là: ${array}`); 

//////////////////////////////////////////////////////////// bai tap 4
let usersListMail = [];
for (let i = 1; i < 11; i++) 
    {
        usersListMail.push("user" + i + "@example.com");
    }
console.log(`Danh sách email người dùng: ${usersListMail}`);
//////////////////////////////////////////////////////////// bai tap 5
let Tongdoanhthu = 0;
for (let i = 1; i < 13; i++) {
    const doanhthuthang = { month: i, total: i * 1000 };
    Tongdoanhthu += doanhthuthang.total;
    console.log(`Doanh thu tháng ${doanhthuthang.month} là: ${doanhthuthang.total}`);
}
console.log(`Tổng doanh thu trong năm là: ${Tongdoanhthu}`);
