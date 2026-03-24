//1. 
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 3)); // Output: 15


//2. 
function findMin(a, b, c ) {
    return Math.min(a, b, c);
}
console.log(findMin(5, 3, 8)); // Output: 3


//3.
function getTopStudents(students, threshold) {
        let topStudents = [];
        for (let student of students) {
            if (student.grades >= threshold) {
                topStudents.push(student.name);
            }
        }
        return topStudents;
}

let students = [
    { name: 'Alice', grades: 9 },
    { name: 'Bob', grades: 7 },
    { name: 'Charlie', grades: 8 }
];
console.log(getTopStudents(students, 8)); // Output: [ { name: 'Alice', grades: 9 }, { name: 'Charlie', grades: 8 } ]


//4.
function calculateInterest(principal, rate, years) {
    return principal + principal * rate * years/100;
}

let principal = 500000000;
let rate = 5;
let years = 2;
console.log(`Interest after ${years} years, principal: ${principal}, rate: ${rate} is: ${calculateInterest(principal, rate, years)}`);