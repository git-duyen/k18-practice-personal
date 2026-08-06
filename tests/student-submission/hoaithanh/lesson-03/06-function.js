// 1. Viết hàm multiply nhận hai tham số a và b, in ra kết quả nhân của chúng. gọi hàm với hai cặp giá trị khác nhau
function multiply(a, b) {
    const phepnhan = a * b;
    console.log(`${a} * ${b} = ${phepnhan}`);
}

multiply(3, 5);
multiply(5, 9);

function multiply1(a, b) {
    const phepnhan1 = a * b;
    return phepnhan1;
}

console.log(multiply1(6, 6));
console.log(multiply1(7, 7));

// 2. Viết hàm findMin nhận 3 tham số c, d, e, trả về giá trị nhỏ nhất gọi hàm và in kết quả với 2 bộ số khác nhau

function findMin(c, d, e,) {
    const Min = Math.min(c, d, e);
    console.log(Min);
}

findMin(10, 4, 7);
findMin(22, 34, 11);

/* 3. Viết hàm getTopStuden nhận 2 tham số
 studens: các mảng Object ( name + score )
 thresold: Ngưỡng điểm để được coi là Top
Điểm trả về mảng chứa tên những học sinh có điểm >= thresold
Gọi hàm với danh sách thực tế và in kết quả */


let students = [
    { name: "Chau", score: 10 },
    { name: "Ngan", score: 9 },
    { name: "Thanh", score: 8 },
    { name: "Hong", score: 7 }
];

function getTopStudent(students, threshold) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);
        }
    }
    return result;
}

console.log(getTopStudent(students, 8));

/* Viết hàm caculateInterest nhận 3 tham số
principle: số tiền ban đầu
rate: lãi suất hàng năm phần thăm( ví dụ 5 là 5%)
years: số năm gửi
Hàm tính trả về tổng số tiền(gốc+lãi) sau years năm, sử dụng công thức lãi đơn
total = principle + principle*rate*year/100
gọi hàm ví dụ thực tế và in kết quả */

function caculateInterest(principle, rate, years) {
    let total = principle + principle*rate*years/100;
    console.log(total)
};

caculateInterest(20000000,5,12);