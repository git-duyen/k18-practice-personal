//Tong từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i ++) {
     sum+=i;
}
console.log(`Tong tu 1 den 100 la: ${sum}`);


//In bang cuu chuong tu 2 đến 9
for (let numb = 2; numb <= 9; numb ++){
    for (let x = 1; x <= 10; x++ ){
          let ketQua = x * numb;
     console.log(`${numb} x ${x} = ${ketQua}`);
    }  
}

//Mảng chứa các số lẻ từ 1 đến 99
const arr = [];
for (let i = 1; i <= 99; i ++){
    if ( i% 2 !==0){
         arr.push (i);
    }
}
console.log(arr)

//In ra 10 email dua tren ten nguoi dung va so thứ tự
const arr = ["kim", "Thuy", "Tho", "Hoa", "Moc", "Tinh", "Sao", "Van", "Phong", "Thien"]
for (let i = 1; i <= 10; i++) {
    console.log(`${arr[i - 1]}${i}@gmail.com`);
}

//Tinh tong doanh thu cua 12 thang
const doanhThuThang = [
    { "month": 1, "Total": 50, },
    { "month": 2, "Total": 60, },
    { "month": 3, "Total": 100, },
    { "month": 4, "Total": 125, },
    { "month": 5, "Total": 30, },
    { "month": 6, "Total": 80, },
    { "month": 7, "Total": 160, },
    { "month": 8, "Total": 75, },
    { "month": 9, "Total": 63, },
    { "month": 10, "Total": 601, },
    { "month": 11, "Total": 120, },
    { "month": 12, "Total": 200, },

]
let sum = 0;
for (let i = 0; i <= 11; i++) {
    sum += doanhThuThang[i].Total;
}
console.log(`doanh thu cua 12 thang la: ${sum}`);
