// Exercise 1
function multiply(a, b) {
    console.log('The result is: ' + a * b);
}
multiply(5, 10);
multiply(12, 3);

// Exercise 2
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    else if (c < min) {
        min = c;
    }
    return min;
}
console.log(findMin(8, 10, 1));
console.log(findMin(5, 3, 9));

// Exercise 3
function getTopStudents(students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }
    return topStudents;
}
const students = [
    { name: 'Tam', score: 8.5 },
    { name: 'Thu', score: 9.2 },
    { name: 'Tien', score: 7.8 },
];
console.log(getTopStudents(students, 8.0));

// Exercise 4

function caculateInteresr(principal, rate, years) {
    const total = principal + (principal * rate * years) / 100;
    return total;
}
console.log(caculateInteresr(100000000, 5.5, 2));
console.log(caculateInteresr(50000000, 6.5, 3));