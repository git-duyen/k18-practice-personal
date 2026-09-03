//trả ra kết quả nhân cảu 2 số truyền vào
function multiply(a, b) {
    let result = a * b;
    console.log(result);
}
multiply(5, 6);
multiply(10, 9);

//Trả ra giá trị nhỏ nhất trong 3 giá trị truyền vào
// let min2;
// function findMin(a, b, c) {
//     if (a < b)
//         min2 = a;
//     else min2 = b;
//     if (min2 < c)
//         min3 = min2;
//     else min3 = c;
//     console.log(`giá trị nhỏ nhất trong 3 số ${a}, ${b}, ${c} là: ${min3}`);
// }
// findMin(10, 20, 5);
// findMin(100, 6, 82);

function findMin(a, b, c){
    let min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    return min;
}
console.log(findMin(10, 20, 5));
console.log(findMin(100, 200, 500));


//Trả về thông tin những học sinh top
// function getTopStudents({name, score}, threshold){
//     if (score >= threshold)
//         console.log(name);
// }
// getTopStudents({name:"Nga",score:10},9);
// getTopStudents({name:"Le",score:8.9},9);
// getTopStudents({name:"Ha",score:9},9);
function getTopStudents(students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }
    return topStudents;
}
const listStudents = [
    { name: "Nga", score: 10 },
    { name: "Le", score: 8.9 }
];
console.log(getTopStudents(listStudents, 9));




//Tính tổng tiền gốc và lãi
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    console.log(`tong goc va lai la: ${total}`);
}
calculateInterest(50000, 5, 2)