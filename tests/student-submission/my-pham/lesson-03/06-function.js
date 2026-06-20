// Câu 1
function multiply(a, b) {
    console.log(a * b);
}
multiply(5, 4);
multiply(15, 2000);

// Câu 2:
function findMin(a, b, c) {
    let min = a;
    if (min > b) {
        min = b;
    }
    if (min > c) {
        min = c;
    }
    return min;
}
let soNhoNhat = findMin(5, 4, 8);
console.log(`So be nhat la: ${soNhoNhat}`);
soNhoNhat = findMin(1, 2, 3);
console.log(`So be nhat la: ${soNhoNhat}`);

// Câu 3: 
function getTopStudents(students, threhold) {
    let topScore = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threhold) {
            topScore.push(students[i].name);
        }
    }
    console.log(`Hoc sinh có diem >=threhold: ${topScore}`);
}
getTopStudents([
    { name: "My", score: 10 },
    { name: "Thanh", score: 8 },
    { name: "Trang", score: 7 }
], 8);

// Câu 4: 
function calculateInterest(principal,rate,years){
    let total = principal + (principal*rate*years)/100;
    console.log(`Tong so tien sau ${years} nam la: ${total}`);
}
calculateInterest(100,8,10);