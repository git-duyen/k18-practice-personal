/*
a. Lặp lại từ 1 đến 100
b. Trong mỗi vòng lặp in ra
    i. nếu giá trị vòng lặp chia hết cho 2 in "<i> là số chẵn"
    ii. nếu gía trị vòng lặp không chia hết cho 2 in "<i> là số lẻ"
*/

for (let i = 0; i < 101; i++) {
    if (i % 2 === 1) { console.log(i + " là số lẻ"); }
    else if (i % 2 === 0) { console.log(i + " là số chẵn"); }
}