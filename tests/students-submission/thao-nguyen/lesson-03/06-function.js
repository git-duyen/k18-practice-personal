const { DiffieHellmanGroup } = require("crypto");

//multiply 2 tham số
function multiply(a, b) {
    return a * b;
}
multiply(2, 3);
multiply(5, 10);
//findMin
    function findMin(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}
//getTopStudents
function getTopStudents(students, threshold) {
    let topStudents = [];
    for (let s of students) {
        if (s.score >= threshold) {
            topStudents.push(s.name);
        }
    }
    return topStudents;
}   
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
];
let threshold = 90;
getTopStudents(students, threshold);
let result = getTopStudents(students, threshold);
console.log(result);
//calculateInterest
function  calculateInterest(principal, rate, years) {
    let interest = principal + principal * rate * years/ 100;
    return interest;
}
console.log(calculateInterest(1000, 5, 2));
