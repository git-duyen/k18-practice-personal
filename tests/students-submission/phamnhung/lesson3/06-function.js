// //bai tap 1
function multiply (a, b) {
    const nhan = a * b;
    return nhan;
}
console.log(multiply(5,10));
console.log(multiply(2,8));

// //bai tap 2
function findMin (a,b,c) {
    const arr = [a, b, c];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin(5, 2, 8));
console.log(findMin(10, 15, 3));

//bai tap 3
function getTopStudents(students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i]["name"]);
        }
    }
    return topStudents;
}
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 78 },
    { name: 'Charlie', score: 92 },
    { name: 'David', score: 65 }
];
const threshold = 80;
console.log(getTopStudents(students, threshold));

//Bai tap 4
function calculateInterest(principal, rate, years) {
    const totalAmount = principal + principal * rate * years /100;
    return totalAmount;
}
console.log(calculateInterest(1000, 5, 2)); 