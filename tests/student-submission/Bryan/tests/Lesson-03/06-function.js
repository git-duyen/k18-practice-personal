/////////////////////////////////////////////////// bai tap 1
function multiply(a,b)
{
    console.log(a,b);
}
multiply(5,10);
multiply(3,4);
// bai tap 2

function  findMIn(a,b,c) {
    if (a < b && a < c) {
        return a;
        console.log("a là số nhỏ nhất");
    } else if (b < a && b < c) {
        return b;
        console.log("b là số nhỏ nhất");
    } else {
        return c;
        console.log("c là số nhỏ nhất");
    }
}

console.log(findMIn(5, 3, 8));
console.log(findMIn(2, 4, 1));
// bai tap 3

function getStopStudent(students,threshold) {
 let topStudents = [];
 for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
        topStudents.push(students[i]);
    }
}
 return topStudents;
}
let threshold = 90;
let students = [
    { name: "Bryan", score: 85 },   { name: "Alice", score: 92 },
    { name: "David", score: 78 },   { name: "Emily", score: 90 },
    { name: "Michael", score: 80 }, { name: "Sarah", score: 88 },
    { name: "John", score: 75 },    { name: "Jessica", score: 95 },
    { name: "Tom", score: 82 }
];
console.log("Top students:", getStopStudent(students, threshold));
// bai tap 4

function calculateInterest(principal, rate, years) {
let total = principal + (principal * rate * years) / 100;
return total;
}

let principal = 1000;
let rate = 5;
let years = 3;
console.log(`Tổng số tiền sau ${years} năm là: ${calculateInterest(principal, rate, years)}`);  
