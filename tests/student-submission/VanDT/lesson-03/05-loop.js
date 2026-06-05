// Bài 1: tính tổng từ 1 đến 100
let a = 0;
for (let i = 1; i <= 100; i++) {
   a = i + a;
};
console.log(a);

// Bài 2: In bảng cửu chương từ 2 đến 9
let b = [2, 3, 4, 5, 6, 7, 8, 9];
for (let n = 0; n <= 7; n++) {
   for (let i = 1; i <= 9; i++) {
      console.log(`${b[n]} x ${i} = ${b[n] * i}`)
   }
};



// Bài 3: Tạo 1 mảng chứa các số lẻ từ 1 đến 99
for (let i = 1; i <= 99; i++) {
   if ((i % 2) == 1) {
      console.log(i);
   }
};

//Bài 4: In ra 10 email dựa trên tên người dùng và số thứ tự
for (let i = 1; i <= 10; i++) {
   console.log(`user` + i + `@example.com`)
};

//Bài 5: Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho
let doanhthu = [
   { month: 1, total: 100 },
   { month: 2, total: 120 },
   { month: 3, total: 130 },
   { month: 4, total: 140 },
   { month: 5, total: 150 },
   { month: 6, total: 160 },
   { month: 7, total: 170 },
   { month: 8, total: 180 },
   { month: 9, total: 190 },
   { month: 10, total: 200 },
   { month: 11, total: 110 },
   { month: 12, total: 170 },
];
let tongtien = 0;
for (let i = 0; i <= 11; i++) {
   tongtien = (tongtien + doanhthu[i].total);
};
console.log(tongtien);