// 1. tính tổng từ 1 đến 100
let sum = 0
for(let i = 1; i < 101; i++){
    sum += i;
}
console.log(sum);

// 2. in bảng cửu chương từ 2 đến 9
// ex1: bang cuu chuong 2

for(let a = 1; a < 10; a++){
    console.log(`2 * ${a} = ${2*a}`)
}

// ex2: bang cuu chuong 2 den 9

for(let b = 2; b < 10; b++){
    for(let c = 1; c < 10; c++){
        console.log(`${b} * ${c} = ${b*c}`);
    }
}

// 3. tạo một mảng chứa các số lẻ từ 1 đến 99

let arr = [1, 3, 5]
for(let d = 7; d < 100; d += 2){
    arr.push(d)
};
console.log(arr);

// 4. in ra 10 email dựa trên tên người dùng vá số thứ tự

for(let e = 1; e < 11; e++){
    console.log(`email${e}@example.com`)
};

// 5. tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu
// cấu trúc { "month": 2, "total": 100}

let revenues = [
    {month: 1, total: 100}, 
    {month: 2, total: 120}, 
    {month: 3, total: 150},
    {month: 4, total: 200},
    {month: 5, total: 180},
    {month: 6, total: 100}, 
    {month: 7, total: 120}, 
    {month: 8, total: 150},
    {month: 9, total: 200},
    {month: 10, total: 180},
    {month: 11, total: 200},
    {month: 12, total: 250},    
]

let sum2 = 0;

for( let f = 0; f < revenues.length; f++){
    sum2 += revenues[f].total
};

console.log(sum2);